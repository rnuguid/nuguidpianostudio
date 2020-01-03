import { Component, OnInit } from '@angular/core';
import students from '../../assets/json/hstudents.json';

@Component({
  selector: 'app-horacio-calendar',
  templateUrl: './horacio-calendar.component.html',
  styleUrls: ['./horacio-calendar.component.css']
})
export class HoracioCalendarComponent implements OnInit {

  mStudents = students

  constructor() { }

  ngOnInit() {
  }
}
