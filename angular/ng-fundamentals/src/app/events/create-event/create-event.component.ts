import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services';
import { IEvent } from '..';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
      em{ float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color:#999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color:999; }
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  event:IEvent;

  constructor(private router: Router, private eventService: EventService) {}


  ngOnInit():void {
    this.event = this.eventService.getEvent(1);

  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;  //this will allow to navagate away withiout triggering the route gaurd
    this.router.navigate(['/events']);
  }

  cancel():void {
    this.router.navigate(['/events']);
  }

}
