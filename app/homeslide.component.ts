import { Component } from '@angular/core';

@Component({
	selector: 'homeslide',
	template: `
      <div class="bio">
      <h1> Studio Calendar </h1>
<iframe src="https://calendar.google.com/calendar/embed?src=nsqfrhotgvb2hfkvgksbo1jh80%40group.calendar.google.com&ctz=America/Los_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
	  </div>
	  `
})
export class HomeSlideComponent { }