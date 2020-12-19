import { Input, Component, OnInit } from '@angular/core';

interface StudentSlotType {
  name   : string;
  time   : CalendarTime;
  length : number;
  day    : Day;
}

type Day = "Monday"| "Tuesday"| "Wednesday"| "Thursday"| "Friday"| "Saturday"| "Sunday"

class CalendarTime {

  mHr  : number
  mMin : number

  constructor(s : string | number){
    if (typeof s === "string") {
      let strs : string[] = s.split(':')
      this.mHr = parseInt(strs[0])
      this.mMin = parseInt(strs[1])
    }
    else if (typeof s === "number") {
      let timeHrs : number = s/60
      this.mHr = Math.floor(timeHrs)
      this.mMin = (timeHrs - this.mHr) * 60
    }
  }

  toMinutes() : number {
    return this.mHr * 60 + this.mMin

  }

  toString() : string {
    return this.mHr.toString().padStart(2,'0') + ":" + this.mMin.toString().padStart(2,'0')
  }

  add(x : CalendarTime){
    this.mHr += x.mHr
    this.mMin += x.mMin % 60

    this.mHr += Math.floor(this.mMin / 60)
    this.mMin %= 60
  }

  equals(x : CalendarTime) : boolean {
    return this.mHr == x.mHr && this.mMin == x.mMin
  }

  lt(x : CalendarTime) : boolean {
    return this.toMinutes() < x.toMinutes()
  }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() mStudents : []
  @Input() startTime : string
  @Input() incTime : string
  @Input() endTime : string
  @Input() days : [] // ["Monday", "Tuesday", ...]

  mMyStudents : StudentSlotType[] = []
  mSlots = {}
  mTimes : CalendarTime[] = []  

  mStartTime : CalendarTime
  mEndTime : CalendarTime
  mIncTime : CalendarTime

  parse(x) {
    let y : StudentSlotType
    let times : string[]
    let day : Day;
    let rowLen : number
    times = x.time.split(':')
    day = x.day
    rowLen = Math.floor(x.length / this.mIncTime.toMinutes())

    y = { name : x.name, time : new CalendarTime(x.time), length : rowLen, day : day }
    this.mMyStudents.push(y)
    if (!this.mSlots[y.day])
      this.mSlots[y.day] = {}
    if (this.mSlots[y.day][y.time.toString()])
      throw "Multiple students in same time slot! " + y.day + y.time.toString()
    this.mSlots[y.day][y.time.toString()] = y
  }

  constructor() {}

  ngOnInit() {
    if (this.mStudents == undefined || this.days == undefined) return;
    
    this.mStartTime = new CalendarTime(this.startTime)
    this.mEndTime = new CalendarTime(this.endTime)
    this.mIncTime = new CalendarTime(this.incTime)
    console.log("mStartTime = " + JSON.stringify(this.mStartTime))
    console.log("mEndTime = " + JSON.stringify(this.mEndTime))
    console.log("mIncTime = " + JSON.stringify(this.mIncTime))


    let t : CalendarTime = this.mStartTime
    let cnt : number = 0

    // I've got to clean this up X_X
    while (t.lt(this.mEndTime)){
      let y : CalendarTime = new CalendarTime(t.toString()) 
      this.mTimes.push(y)
      console.log(JSON.stringify(t))
      t.add(this.mIncTime)
    }
    if (t.equals(this.mEndTime)){
      let y : CalendarTime = new CalendarTime(t.toString()) 
      this.mTimes.push(y)
    }

    this.mStudents.forEach(this.parse.bind(this))
    //console.log(JSON.stringify(this.mSlots))
  }

}
