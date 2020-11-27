import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { NPSConstants } from './NPSConstants'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	loggedIn : boolean = false;
	private isLoggedInSource = new Subject<boolean>();
	private mLastCall : number = 0;
	static readonly MIN_TIME_BTW_UPDATES_MS : number = 5000;	
	static readonly SERVER_PATH : string = NPSConstants.SERVER_PATH;

    constructor(private http : HttpClient) { }

	// Subscribe to this to get status updates (emits true when logged in, false otherwise)
	getLoginStatusObservable()
	{
		return this.isLoggedInSource.asObservable();
	}

	// Call to log in
	// returns an rxjs observable that will emits "1" on success, "0" on incorrect credentials, and "-1" on all other errors
	login(username: string, password: string) {

		let loginData : any = new Object()
		loginData["username"] = username;
		loginData["password"] = password;

		let retValSource = new Subject<string>();
		let retVal$ = retValSource.asObservable();

		this.http.post(AuthenticationService.SERVER_PATH + "/login", 
		JSON.stringify(loginData),{responseType : 'text', withCredentials: true}).subscribe(
				{
					next: x=> {
						console.log("next: " + JSON.stringify(x))
						this.update(true /*true = force update regardless of when last update */ )
						if (x == "1")
						{
							retValSource.next("1")
						}
						else
						{
							retValSource.next("0")
						}
					}, 
					error: (x) => {
						console.log("error: " + JSON.stringify(x))
						retValSource.next("-1")
					}, 
					complete: () => {
						console.log("COMPLETE")
						retValSource.complete()
						}
				})

		return retVal$
	}

	/* Call to log out */
	// returns an rxjs observable that will emits true on success, false if unable to connect
	logout() {
		let retValSource = new Subject<boolean>();
		let retVal$ = retValSource.asObservable();

		this.http.get(AuthenticationService.SERVER_PATH + "/logout", {responseType: 'text', withCredentials: true}).subscribe(
		{
			next: x=>retValSource.next(true),
			error: e=> retValSource.next(false),
			complete:()=>{retValSource.complete(); this.update(true)}
		})
		return retVal$
	}

	/* Call to update */
	update(force = false){
		if (force)
		{ 
			this._update()
		}
		else 
		{
			if (Date.now() - this.mLastCall > AuthenticationService.MIN_TIME_BTW_UPDATES_MS)
			{
				this._update()
				this.mLastCall = Date.now()
			}
		}
	}

	// Call this to request check w/ server abt login status
	private _update(){
		//this.http.get("https://nuguidpianostudio.com/cgi-bin/bknd.py/checkLogin").subscribe(
		this.http.get(AuthenticationService.SERVER_PATH + "/checkLogin", {withCredentials: true}).subscribe(
			{
				next: x => {
					console.log("next: " + JSON.stringify(x));
					if (x == "1"){
						console.log("checkLoggedIn - Logged In!")
						this._setLoggedIn(true)
					}
					else
					{
						console.log("checkLoggedIn - Logged Out!")
						this._setLoggedIn(false)
					}
				}, 
				error: (x) => {
					this._setLoggedIn(false)
					console.log("checkLoggedIn - error: " + JSON.stringify(x))}, 
			}
		)
	}
	
	private _setLoggedIn(isLoggedIn: boolean) {
		this.isLoggedInSource.next(isLoggedIn)
	}


}
