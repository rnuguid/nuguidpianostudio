import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-current-students',
  templateUrl: './current-students.component.html',
  styleUrls: ['./current-students.component.css']
})
export class CurrentStudentsComponent {
  error : any = [];
  loggedOut : boolean = false;
  respRx : boolean = false;

  constructor(private auth : AuthenticationService) {}  
  onClick()
  {
  	console.log("You clicked me!")
  	this.auth.logout().subscribe({next: x => {this.loggedOut = x; this.respRx = true; this.error = []},
                                  error: x=> {this.respRx = true; this.error = x;},
                                  complete: () => {this.respRx = true}});
  }
}
