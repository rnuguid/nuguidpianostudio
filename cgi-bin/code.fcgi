#!/home/nuguidpi/webpy/bin/python

import web
import os, sys
import json
import mysql.connector as sql
import hashlib
import db_options

# Setup environemtn if on a2 hosting, else already set
if os.environ.get('HOSTNAME') == 'a2ss40.a2hosting.com':
    os.environ.setdefault('PATH', '/bin:/usr/bin')
    os.environ['PATH'] = '/home/nuguidpi/webpy/bin:' + os.environ['PATH']
    os.environ['VIRTUAL_ENV'] = '/home/nuguidpi/webpy/bin'
    os.environ['PYTHON_EGG_CACHE'] = '/home/nuguidpi/webpy/bin'
    os.chdir('/home/nuguidpi/public_html/')
    local_env = False;
else:
    local_env = True;


login_query = "SELECT password FROM accounts WHERE username = %s"

# Tuple of urls this server understands.
urls = (
    '/login', 'login',
    '/hi', 'hi',
    '/test', 'test',
    '/check', 'check',
    '/file-getter', 'filegetter',
    '/file-writer', 'filewriter',
)

# FOr whatever reason, this MUST be false if using sessions.  Which I am.
web.config.debug = False
    

# My URL object thingys.
class hey:
    def GET(self):
        return "hey"
    
class login:
    def POST(self):
        
        data = json.loads(web.data());
        
        # Pull info from MySQL DB and do check.
        meta_db = db_options.meta_db;
        cx = sql.connect(**meta_db)
        cursor = cx.cursor()
        cursor.execute(login_query, (data['username'],))
        res = cursor.next()
        cursor.close()
        cx.close()

        s1 = hashlib.sha1()
        s1.update(data['password'])

        if (res[0] == s1.hexdigest()):
            session.valid = True
            return "True"
        else:
            session.valid = False
            return "False"

class check:
    def GET(self):
        return str(session.valid)

class filegetter:
    def POST(self):
        file_name = web.data()
        print "Trying to open %s" % (file_name,)
        fid = open("../app/%s" % (file_name,))
        return fid.read()

class filewriter:
    def POST(self):
        json_dat = web.data()
        dat = json.loads(json_dat);
        file_name = dat['file_name'];
        to_write = dat['file_body'];
        if (session.valid):
            print "Session OK, writing %s" % (file_name,)
            fid = open("../app/%s" % (file_name,), 'w')
            fid.write(to_write)
        return


#
# --- RUN ---
#
# Set to run fcgi if hosted, (else use normal http server)
if not local_env:
    web.wsgi.runwsgi = lambda func, addr=None: web.wsgi.runfcgi(func, addr)
# Run
app = web.application(urls, locals())
session = web.session.Session(app, web.session.DiskStore('sessions'), initializer={'count':0, 'valid':False})
if __name__ == "__main__":
    app.run()
