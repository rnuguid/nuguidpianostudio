import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import states from '../../assets/json/states.json'
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  //styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  onSubmit() { 
   this.submitted = true
    
   this.myForm.markAllAsTouched()

   if (this.myForm.valid){
     this.clientOK = true  // client validation passed.
     this.srvRspRx = false // wait for server response

     // Translate FormGroup's data into FormData
     let fd : FormData = new FormData()
     Object.keys(this.myForm.controls).forEach((k)=>fd.append(k,this.myForm.get(k).value))

    // console.log(this.myForm.getRawValue());
    // this.http.post("https://formspree.io/xpzqbopg", fd, {responseType : 'json'}).subscribe({next: x=>console.log("Executed!"), error: x=>console.log("ERROR"), complete: ()=>console.log("COMPLETE")})

     this.http.post("https://formspree.io/xpzqbopg", 
	fd, 
	{responseType : 'json'}).subscribe({next: x=>console.log("next: " + JSON.stringify(x)), 
					    error: (x) => {this.srvRspRx = true; 
							   this.serverOK = false; 
	 	      					   console.log("error: " + JSON.stringify(x))}, 
					    complete: () => {this.srvRspRx = true; 
                                                             this.serverOK = true; 
                                                             this.myForm.disable(); 
                                                             console.log("COMPLETE")}})
   }
   else {
     this.clientOK = false
   }
  }

  ngOnInit() {}

  srvRspRx : boolean = false;
  serverOK : boolean = false; 
  clientOK : boolean = false;
  submitted : boolean = false;

  // handle mask fill events, this manually controls phone field's validity
  mf(ev : boolean) { this.mfv = ev; this.myForm.controls.phone.updateValueAndValidity();}
  mfv : boolean = false;
  valPhone(control: AbstractControl) : ValidationErrors | null 
  {
    return (this.mfv === true ? null : {"Bad": ""});
  }
  states = states
  grades = ["pre-K", "K", "01","02","03","04","05","06","07","08","09","10","11","12","Adult"];
  
  myForm = this.fb.group({
    name : [, Validators.required],
    birthDate : [, Validators.required],
    schoolName : [, Validators.required],
    grade : [,[Validators.min(0), Validators.max(12), Validators.required]],
    gname1 : [, Validators.required],
    gname2 : [],
    sa : [, Validators.required],
    city : [, Validators.required],
    state : [, Validators.required],
    zip : [, [Validators.minLength(5), Validators.maxLength(5), Validators.required]],
    phone : [, [this.valPhone.bind(this)]],
    email : [,[Validators.email, Validators.required]],
    pianostudies : [],
    musicalact : [],
    extracurr : [],
})

 constructor(private fb : FormBuilder, private http : HttpClient) {}
}
