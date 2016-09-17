import { Component } from '@angular/core';

@Component({selector: 'horacio-calendar',
template: `
<div class='bio'>
<h1> H's Teaching Schedule </h1>
<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=i7iokjuq0g2hnehd2unp366ano%40group.calendar.google.com&amp;color=%23A32929&amp;ctz=America%2FChicago" style="border-width:0" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
</div>`
})
export class HoracioCalendarComponent {}