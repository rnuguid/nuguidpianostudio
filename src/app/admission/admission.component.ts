import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  //styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  onSubmit() { }
  ngOnInit() {}

  // handle mask fill events, this manually controls phone field's validity
  mf(ev : boolean) { this.mfv = ev; this.myForm.controls.phone.updateValueAndValidity();}
  mfv : boolean = false;
  valPhone(control: AbstractControl) : ValidationErrors | null 
  {
    return (this.mfv === true ? null : {"Bad": ""});
  }

  states = [{acr: "AL", val: "Alabama", sel: false}, {acr: "MN", val: "Minnesota", sel: true}];
  grades = ["pre-K", "K", "01","02","03","04","05","06","07","08","09","10","11","12","Adult"];
  
  myForm = this.fb.group({
    name : [],
    birthDate : [],
    schoolName : [],
    grade : [,[Validators.min(0), Validators.max(12), Validators.required]],
    gname1 : [],
    gname2 : [],
    sa : [],
    city : [],
    zip : [, [Validators.minLength(5), Validators.maxLength(5), Validators.required]],
    phone : [, [this.valPhone.bind(this)]],
    email : [,[Validators.email, Validators.required]],
    pianostudies : [],
    musicalact : [],
    extracurr : []
})
  constructor(private fb : FormBuilder) {}
}
