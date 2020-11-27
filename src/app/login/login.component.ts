import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	inProgress : boolean = false;
	success : boolean = false;
	logInErr : boolean = false;
	serverRx : boolean = false;
	loggedIn : boolean = false;

	constructor(private fb : FormBuilder, private auth : AuthenticationService) {}
	ngOnInit(): void {
		this.auth.getLoginStatusObservable().subscribe({ next : x => this.loggedIn = x })
	}

	myForm = this.fb.group({
		username : [, Validators.required],
		password : [, Validators.required],
	})

	onSubmit() 
	{
		this.serverRx = false
		this.inProgress = true
		this.success = false
		this.logInErr = false
		
		if (this.myForm.valid)
		{
			this.myForm.disable()
			this.auth.login(this.myForm.get('username').value, this.myForm.get('password').value).subscribe(
				{next: x => { if (x == "1") 
								this.success = true
			                  else
			                  	this.success = false;

			              	},
			     error: x => this.logInErr = true,
			     complete: () => {
			     					this.inProgress = false
			     					this.serverRx = true
			     				}
			    }
			)
		}
		else
		{
			this.logInErr = true
		}
	}
}