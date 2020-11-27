import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NPSConstants } from '../NPSConstants'

@Component({
  selector: 'app-horacio-calendar',
  templateUrl: './horacio-calendar.component.html',
  styleUrls: ['./horacio-calendar.component.css']
})
export class HoracioCalendarComponent implements OnInit {

  SERVER_PATH : string = NPSConstants.SERVER_PATH;

  mBad : boolean = false;
  mError : any = []
  mStudents : any = [];
  mGotStudents : boolean = false;


  constructor(private http : HttpClient) { }

  ngOnInit() {
  	this.http.get(this.SERVER_PATH + "/hcalendar", {withCredentials: true, responseType: 'json'}).subscribe(
  	{
  		next: x => {this.mGotStudents = true; this.mStudents = x},
  		error: x => {this.mError = x; this.mBad = true},
  	})  	
  }
}
