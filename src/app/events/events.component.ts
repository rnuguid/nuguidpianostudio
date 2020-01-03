import { Component, OnInit } from '@angular/core';
import { EventShape } from '../event/event.component';
import data from '../../assets/json/events.json';

interface EventShapeStr {
  name: string;
  date: string;
  desc: string;
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor() { }

  // string events from JSON.
  items : EventShapeStr [] = data;

  // processed events
  events : EventShape [] = [];
  pastEvents : EventShape [] = [];
  upcomingEvents : EventShape [] = [];
  upClkF : boolean = false;
  pastClkF : boolean = false;

  pastClk(event : any)
  {
    this.pastClkF = !this.pastClkF
  }

  upClk(event : any)
  {
    this.upClkF = !this.upClkF
  }

  ngOnInit() {

    // convert EventShapeStr to EventShape
    for (let i in this.items){
      this.events[i] = {name:this.items[i].name, desc:this.items[i].desc, date:new Date(this.items[i].date)};
    }

    // sort by date, and split into upcoming events and past events.
    this.events.sort((a : EventShape, b : EventShape)=> a.date.getTime() - b.date.getTime());
    let currTime : Date = new Date();
    let ix : number = this.events.findIndex((z) => currTime.getTime() < z.date.getTime());
    this.pastEvents = this.events.splice(0,ix)
    this.upcomingEvents = this.events // yeah.. the remaineder are upcomig
  }
}
