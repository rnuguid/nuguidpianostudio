#!/usr/bin/env python

import os
import sys
import json
import hashlib
import datetime
import time
import logging

# Setup logging
logging.basicConfig(filename="../blah.log", format='%(asctime)s - %(funcName)s - %(levelname)s - %(message)s')
NPS_LOG = logging.getLogger("npsLogger")
NPS_LOG.setLevel(logging.INFO)

NPS_LOG.info("bknd enter")
NPS_LOG.debug(os.environ)

# Try grabbing the third-party modules
try:  
    import db_options
    import web
    import jwt
except Exception as err:
    NPS_LOG.critical("Uh oh!")
    NPS_LOG.critical(type(err))
    NPS_LOG.critical(str(err))
    raise err

# Get our connector to sql
try:
    import MySQLdb as sql
    NPS_LOG.info("using MySQLdb")
    local_env = False   
except ImportError:
    import pymysql as sql
    NPS_LOG.info("using pymysql")    
    local_env = True
except Exception as err:
    NPS_LOG.critical("Uh oh!")
    NPS_LOG.critical(type(err))
    NPS_LOG.critical(str(err))
    raise err

NPS_LOG.debug("Setup for our environment!")




urls = (
    '/login', 'routeLogin',
    '/logout', 'routeLogout',
    '/checkLogin', 'routeCheckLogin',
    '/cookieTesting', 'routeCookieTesting',
    '/rcalendar', 'routeRcalendar',
    '/hcalendar', 'routeHcalendar',
    '/get', 'routePdfFile', # If needed, we will expand beyond pdfs..
    '/(.*)', 'routeDefault'
)

web.config.debug = False
login_query = "SELECT password FROM accounts WHERE username = %s"
MAX_SECONDS_LOGGED_IN = 3600 * 48 # 2 days max
OUR_COOKIE = "npscookie"
rafs_secret = db_options.rafs_secret

SIM_DELAY = None
#SIM_DELAY = 1 # one second..



"""
Some utility routines
"""


# Check if client has unexpired cookies w/ valid JWT
# returns True if yes, False otherwise
def checkCookies():
    NPS_LOG.debug("hi")

    ok = False
    c = web.cookies()

    try:
        NPS_LOG.info("Looking for cookie...")
        tC = c[OUR_COOKIE]
    except:
        tC = None
        ok = False
    else:
        NPS_LOG.info("Got my cookie :) " + tC)
        try:
            decoded = jwt.decode(tC, rafs_secret, algorithms='HS256')
        except:
            NPS_LOG.debug("Unable to decode token, or expired token.")
            ok = False
        else:
            NPS_LOG.debug("Decoded = " + repr(decoded))
            ok = True
            
    if SIM_DELAY:
        time.sleep(SIM_DELAY)      
    return ok    


#Prepare HTTP headers, standard response
def prepHeaders(contentType="text/html", usingCreds=True):
    NPS_LOG.debug("hi")
    web.header('Content-Type', contentType)

    if usingCreds:
        #web.header('Access-Control-Allow-Origin', web.ctx.env['HTTP_ORIGIN'])
        web.header('Access-Control-Allow-Origin', "https://nuguidpianostudio.com")
        web.header('Access-Control-Allow-Credentials', 'true')    


    if SIM_DELAY:
        time.sleep(SIM_DELAY) 

    return

# Read in entire text file
def readFile(filename, perms='r'):
    NPS_LOG.debug("hi")    
    f = open(filename, perms) # This going to change
    data = f.read() 
    return data   




""" 
Now, the route handlers...
"""

# Catch-all default route
class routeDefault:
    def GET(self, url):
        NPS_LOG.debug(self.__class__.__name__)

        web.header('Content-Type', 'text/html')
        encoded = jwt.encode({'some': 'payload'},
                             'secret', algorithm='HS256')

        return "<html><body><b>Muhaha</b> url=" + url + repr(encoded) + " ... </body></html>"

# Client calls this to check if logged in
class routeCheckLogin:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)

        prepHeaders()

        cookiesOk = checkCookies()
        retVal = "1" if cookiesOk else "0"

        return retVal

# For test purposes, when setting up in new environment
class routeCookieTesting:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)

        web.header(
            'Content-Type', 'text/html')
        web.header(
            'Access-Control-Allow-Origin', '*')
        c = web.cookies()
        try:
            tC = c.testCookie
        except:
            tC = None
            
        if tC:
            retStr = "Cookie exist!"
        else:
            web.setcookie(
                'testCookie', 'LOL', 360)
            retStr = "Setting new cookie"

        return retStr

# Client POSTs to this to log in
class routeLogin:
    def POST(self):
        NPS_LOG.debug(self.__class__.__name__)

        prepHeaders()

        data = json.loads(web.data())
        
        # Pull info from MySQL DB and do check.
        meta_db = db_options.meta_db
        cx = sql.connect(**meta_db)
        cursor = cx.cursor()
        cursor.execute(login_query, (data['username'],))

        retStr = ""
        good = False
        
        for res in cursor:
            s1 = hashlib.sha1()
            s1.update(data['password'].encode('utf-8'))
            good = s1.hexdigest() == res[0]

        cursor.close()
        cx.close()

        # Set (or unset) cookie as appropriate
        if (good):
            # Authenticated, create/set cookie.
            encoded = jwt.encode(
                {'user': data['username'], 
                 'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=MAX_SECONDS_LOGGED_IN)}, 
                 rafs_secret, algorithm='HS256').decode('utf-8')
            web.setcookie(OUR_COOKIE, encoded, MAX_SECONDS_LOGGED_IN)
            retStr = "1"
            
        else:
            # Not authenticated, 
            web.setcookie(OUR_COOKIE, 'bad', -1)  # unset cookie, -1
            retStr = "0"

        return retStr

# Client GETs this to request log out
class routeLogout:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)

        prepHeaders()
        
        web.setcookie(OUR_COOKIE, 'bad', -1)  # unset cookie, -1

        return

# Authenticated client GETs this to get rosanna's students in json
class routeRcalendar:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)
        if not checkCookies():
            prepHeaders()
            return "not logged in"

        prepHeaders(contentType="application/json")
        data = readFile("../assets/json/rstudents.json")

        return data

# Authenticated client GETs this to get horacio's students in json
class routeHcalendar:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)

        if not checkCookies():
            prepHeaders()
            return "not logged in"

        prepHeaders(contentType="application/json")
        data = readFile("../assets/json/hstudents.json")

        return data

# Authenticated client GETs this w/ ?filename=<file> to retrieve pdf file
class routePdfFile:
    def GET(self):
        NPS_LOG.debug(self.__class__.__name__)

        if not checkCookies():
            prepHeaders(usingCreds=False)                
            return "You must be logged in to download this file."

        user_data = web.input(filename=None)
        filename = user_data["filename"]
        NPS_LOG.debug("Attempt to read file: %s" % filename)
        if filename:
            try:
                data = readFile("../assets/pdf/%s" % filename, perms='rb')
            except:
                prepHeaders(usingCreds=False)
                return "File %s no exist" % filename
            else:
                prepHeaders(contentType="application/pdf", usingCreds=False)
                return data

        return data        


app = web.application(urls, globals())
if __name__ == "__main__":
    app.run()
