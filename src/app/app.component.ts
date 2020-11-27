import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  	title = 'nuguidpianostudio';
  	loggedIn : boolean = false;
  	cnt : number = 0;
	constructor(private auth : AuthenticationService) {}
	ngDoCheck(): void {
		this.auth.update()
	}
	ngOnInit(): void {
		this.auth.getLoginStatusObservable().subscribe(x => this.loggedIn = x)
		this.auth.update()
	}
	logout(): void {
		this.auth.logout().subscribe({error: (e)=>console.log("Unable to contact server!")})
	}
}
