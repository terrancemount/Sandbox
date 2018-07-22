import { Component, OnInit } from '@angular/core';
import { EventService } from '../services';
import { IEvent, ISession } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
      .container { padding-left: 20px; padding-right: 20px;}
      .event-image { height: 100px; }
      a {cursor:pointer;} 
  `]
})
export class EventDetailsComponent implements OnInit {
  event:IEvent;
  addMode:boolean;
  

  constructor(private eventService: EventService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  //this will toggle a flag on the component to hide or show the add session template and invers for the session list
  addSession(){
    this.addMode = true;
  }

  saveNewSession(session:ISession){
    //this goes throught the event sessions and pulls out all the ids then it returns the max id
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    //need to set the id on the new session
    session.id = maxId + 1;

    //add the new session to the event list 
    this.event.sessions.push(session);

    //use the eventService to update the event with a new session
    this.eventService.updateEvent(this.event);

    //clear the create sessions form on the event details page
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
}
