import {Component} from '@angular/core';
import { Employee } from '../models/emplyee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Foo", "Other"];
  model = new Employee('', 'Smith', true, "w2", "Spanish");

}
