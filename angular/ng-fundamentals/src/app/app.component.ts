import { Component } from '@angular/core';
import { EventListComponent } from './events/event-list.component';
import { EventService } from '../services/event.service';
import { EventModel } from '../models/event.model';

@Component({
  selector: 'app-root',
  template: `
      <nav-bar></nav-bar>
      <event-list></event-list>
      <img src='/assets/images/basic-shield.png'/>`
})
export class AppComponent {

}
