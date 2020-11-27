import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NPSConstants } from '../NPSConstants'

@Component({
  selector: 'app-rosanna-calendar',
  templateUrl: './rosanna-calendar.component.html',
  styleUrls: ['./rosanna-calendar.component.css']
})
export class RosannaCalendarComponent implements OnInit {

  SERVER_PATH : string = NPSConstants.SERVER_PATH
  
  mBad : boolean = false;
  mError : any = []
  mStudents : any = [];
  mGotStudents : boolean = false;

  constructor(private http : HttpClient ) { }

  ngOnInit() {
  	this.http.get(this.SERVER_PATH + "/rcalendar", {withCredentials: true}).subscribe(
  	{
  		next: x => {this.mGotStudents = true; this.mStudents = x},
  		error: x => {this.mError = x; this.mBad = true},
  	})
  }

}
