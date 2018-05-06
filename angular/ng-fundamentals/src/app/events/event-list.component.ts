import { Component } from '@angular/core'
import { EventModel } from '../../models/event.model';
import { EventService } from '../../services/event.service';


@Component({
    selector: 'event-list',
    template:`
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <h3>Number of events attending: {{ numberOfEventsAttending }} Total cost: {{ totalEventCost }} </h3>
            <div class='row'>
                <div class='col-md-5' *ngFor='let event of events'>
                    <event-thumbnail
                        [event] = 'event'
                        (rsvpChange)='changeNumberOfEvents($event)'
                        (eventCostChange)='changeTotalCost($event)'>
                    </event-thumbnail>
                </div>
            </div>
        </div>
    `
    
})
export class EventListComponent{
    events:EventModel[];
    numberOfEventsAttending: number = 0;
    totalEventCost: number = 0;
    selectAll: boolean = false;

  
    constructor(private eventService: EventService){
      this.events = eventService.getEventList();
    }

    changeNumberOfEvents(goingToEvent: boolean){
        goingToEvent ? this.numberOfEventsAttending++ : this.numberOfEventsAttending--;
    }

    changeTotalCost(eventCost: number){
        this.totalEventCost += eventCost;
    }

    selectAllClicked(){
        this.selectAll = !this.selectAll
    }
    
}
