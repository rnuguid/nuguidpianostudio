import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
	selector: 'admin',
	templateUrl: 'app/admin.component.html'
})
export class AdminComponent{
    
    
    constructor(private auth : AuthenticationService){
    }


    isLoggedIn(){
        return this.auth.checkAuth()
    }




};

