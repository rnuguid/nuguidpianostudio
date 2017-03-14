import { Component } from '@angular/core'
import { FileGetterService } from './file-getter.service'
import { FormGroup } from '@angular/forms'

@Component({
	selector: "editor",
	templateUrl: "./app/editor.component.html"
})
export class EditorComponent {
    private orig_events_txt : String
    private editor_events_txt : String
    private status_message : String
    private is_successful = false


    // Editor component only requires my file getter service (in order to interat with web.py server)
    constructor( private filegetter : FileGetterService ) {
        this.update()
    }


    // This method informs server of updates, using POST
    onSubmit(form : FormGroup ){
        if (confirm("Are you sure you wish to submit changes?")){
        this.filegetter.updateDat('events.txt', this.editor_events_txt).subscribe( x => {this.update(form); this.success()} );
        }
        return
    }

    // This method updates component with current files from server.
    update(form? : FormGroup){
        this.filegetter.getObservableDat('events.txt').subscribe( x => { if (form) {console.log('Resetting form...'); form.reset({"pianostudies":this.editor_events_txt});} this.updateVars(x);} )
    }

    updateVars( x ){
        this.orig_events_txt = x.text(); 
        this.editor_events_txt = this.orig_events_txt;
    }

    reset( form : FormGroup ){
        if (confirm("Are you sure? Any previous changes will be discarded.")){
            this.is_successful = false
            this.update( form )
        }
        return
    }

    success(){
        this.is_successful = true
        //this.status_message = "Changes saved! "
        return
    }


}


