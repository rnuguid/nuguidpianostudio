import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthenticationService } from './authentication.service';
import { HTTP_PROVIDERS } from '@angular/http';
@Component({
selector: "login",
templateUrl: "app/login.component.html",
providers: [HTTP_PROVIDERS]
})
export class LoginComponent {

private username : string;
private password : string;
private hrm : string;

constructor( private auth_service : AuthenticationService ){}

onSubmit(){
   this.auth_service.login(this.username, this.password)
//   .subscribe( x => {this.hrm = x.text() });
}

}


