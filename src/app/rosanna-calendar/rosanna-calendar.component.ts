import { Component, OnInit } from '@angular/core';
import students from '../../assets/json/rstudents.json';

@Component({
  selector: 'app-rosanna-calendar',
  templateUrl: './rosanna-calendar.component.html',
  styleUrls: ['./rosanna-calendar.component.css']
})
export class RosannaCalendarComponent implements OnInit {

  mStudents = students

  constructor() { }

  ngOnInit() {
  }

}
