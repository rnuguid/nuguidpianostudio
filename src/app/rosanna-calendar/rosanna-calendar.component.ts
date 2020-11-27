import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//import students from '../../assets/json/rstudents.json';


//SERVER_PATH : string = "https://nuguidpianostudio.com/cgi-bin/bknd.py";
//SERVER_PATH : string = "http://0.0.0.0:8080";

@Component({
  selector: 'app-rosanna-calendar',
  templateUrl: './rosanna-calendar.component.html',
  styleUrls: ['./rosanna-calendar.component.css']
})
export class RosannaCalendarComponent implements OnInit {

//SERVER_PATH : string = "https://nuguidpianostudio.com/cgi-bin/bknd.py";
SERVER_PATH : string = "http://0.0.0.0:8080";
  //mStudents = students
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
