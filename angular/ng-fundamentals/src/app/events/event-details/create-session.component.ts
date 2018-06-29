import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession } from "..";
import { restrictedWords } from "../shared/restriced-words.validator";


@Component({
    templateUrl: './create-session.component.html',
    styles: [`
      em{ float:right; color:#E05C65; padding-left: 10px;}
      .error input, .error select, .error textarea {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color:#999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color:999; }
  `]
})

export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    ngOnInit(){

        //declare all the form controls and give them validators\
        //note more then one validator can use an array
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
            Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);
        
        //wrap all the form controls together into one form group    
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });

    }

    
    saveSession(formValues){
        let session:ISession ={
            id:undefined,
            presenter: formValues.presenter,
            name: formValues.name,
            duration: +formValues.duration, //the + will cast duration to a number
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session);
    }
}