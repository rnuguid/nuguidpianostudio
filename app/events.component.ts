import { Component } from '@angular/core';
import { FileGetterService } from './file-getter.service'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
	selector: 'events',
	templateUrl: './app/events.component.html'
})
export class EventsComponent{
    private events_txt : String

    constructor(private file_getter : FileGetterService){
        file_getter.getObservableDat('events.txt').subscribe( x => { this.events_txt = x.text() })
    }
}
