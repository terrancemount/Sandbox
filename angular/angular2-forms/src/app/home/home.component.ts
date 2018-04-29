import {Component} from '@angular/core';
import { Employee } from '../models/emplyee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Foo", "Other"];
  model = new Employee('', '', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

  textToUpperCase(value: string){
    this.model.firstName = value.toUpperCase();
  }

  validPrimaryLanguage(value: string){
      this.hasPrimaryLanguageError = value === 'default';
  }

}
