import { Input, Component, OnInit } from '@angular/core';

export interface EventShape {
  name: string;
  date: Date;
  desc?: string;
  link?: string;
};

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event : EventShape
  @Input() hasOccurred : boolean = false
  dateStr : string

  constructor() { }
  ngOnInit() {
    this.dateStr = this.event.date.toDateString();
    console.log("Hrm... " + JSON.stringify(this.event) + this.dateStr)
  }

}
