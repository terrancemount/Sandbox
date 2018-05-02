import {Component} from '@angular/core';
import { Employee } from '../models/emplyee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

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
  startDate: Date;
  myTime: Date; 
  singleModel: string = 'off'
  
  bsConfig: Partial<BsDatepickerConfig>;
  
  constructor(private formPoster:FormPoster){
    this.bsConfig = Object.assign({}, { showWeekNumbers: false });
  }

 
  
  submitForm(form: NgForm){
    //note: the submit button will be disabled if the form is invalid.  
    
    
    
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
