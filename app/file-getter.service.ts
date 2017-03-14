import { Injectable } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http';

// RxJS library


import * as globals from './globals'
@Injectable()
export class FileGetterService {

private serverUrl  : string = globals.WEBPY_HOST_PREFIX+"/file-getter";
private serverUrlWrite  : string = globals.WEBPY_HOST_PREFIX+"/file-writer";

    constructor( private http : Http ){


    }

    getObservableDat(dat_name : String ){
        return this.http.post( this.serverUrl, dat_name )

    }

    updateDat(dat_name : String, dat_body : String ){
        let to_write = JSON.stringify({'file_name':dat_name, 'file_body' : dat_body})
        return this.http.post( this.serverUrlWrite, to_write )
    }


}

