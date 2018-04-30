import {Component} from '@angular/core';
import { Employee } from '../models/emplyee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [];
  model = new Employee('', '', true, 'w2', 'default');
  hasPrimaryLanguageError = false;
  employeeId = 0;

  constructor(private formPoster:FormPoster){
    //immediatly request the mock server for the language array.
    this.formPoster.getLanguages()
      .subscribe( //this subsribe will make the observable will reach out to the server.
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );
  }

  textToUpperCase(value: string){
    this.model.firstName = value.toUpperCase();
  }

  validPrimaryLanguage(value: string){
      this.hasPrimaryLanguageError = value === 'default';
  }

  
  submitForm(form: NgForm){
    //note: the submit button will be disabled if the form is invalid.  
    
    //call the validate primary lang first
    this.validPrimaryLanguage(this.model.primaryLanguage);
    
    //check if the is a language error.
    if(this.hasPrimaryLanguageError)
      return; //cancle proccessing
    
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data), //you can get the id out of data
        err => console.log('error: ', err)
      )
  }


}
