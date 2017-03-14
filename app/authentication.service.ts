// Angular JS
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// RxJS library
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// My globals.
import * as globals from '../app/globals';


@Injectable()
export class AuthenticationService {

private isLoggedIn   : boolean = false;
private loginUrl  : string = globals.WEBPY_HOST_PREFIX+"/login";
private logoutUrl : string = globals.WEBPY_HOST_PREFIX+"/logout"; 
private checkUrl : string = globals.WEBPY_HOST_PREFIX+"/check";
private json_string : string = "gar";

constructor( public http : Http ){         
    console.log('Creating authentication service...')
    this.http.get(this.checkUrl).subscribe( x => { this.isLoggedIn = (x.text() == 'True')})
};

// This function sends login/pass to server.
login(username : string, password : string){
    console.log("I'm trying...");
    let header = new Headers({"Content-Type": "application/json"});
    let options = new RequestOptions({ headers: header });
	this.http.post(this.loginUrl, JSON.stringify({ "username" : username, "password" : password })+'\n', options)
    .map( (res : Response) => {return res})
    .subscribe( x => { this.isLoggedIn = (x.text() == 'True') })
    return
}


// Interprets server response and sets isAuthenticated
checkAuth(){
    return this.isLoggedIn
}

}

