import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globals from '../app/globals';

import { Http, Response } from '@angular/http';

@Component({
	selector: 'test-php',
	templateUrl: 'app/test-php.component.html'
})
export class TestPhpComponent{

private my_string;
private ugh;

constructor (private http : Http ){}

ngOnInit(){
	this.say_hi();
}


say_hi() {
	this.ugh = "At least I will be executed...";
	//let my_string = "WTF!"
    let a_string = this.http.get(globals.PHP_HOST_PREFIX + "z.php").map(this.getVal);
    a_string.subscribe( a=> this.my_string = a);

}


catchError(r: Response | any){

}

getVal(r : Response ) {
let hi = r.text();

return hi
}
};

