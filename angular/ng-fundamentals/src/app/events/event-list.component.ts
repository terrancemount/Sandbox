import { Component, OnInit } from '@angular/core'
import { EventModel } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { ToastrService } from '../../services/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    template:`
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <h3>Number of events attending: {{ numberOfEventsAttending }} Total cost: {{ totalEventCost }} </h3>
            <div class='row'>
                <div class='col-md-5' *ngFor='let event of events'>
                    <event-thumbnail
                        (click)='handleThumbnailClick(event.name)'
                        [event] = 'event'
                        (rsvpChange)='changeNumberOfEvents($event)'
                        (eventCostChange)='changeTotalCost($event)'>
                    </event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventListComponent implements OnInit{
    
    events: EventModel[];
    numberOfEventsAttending: number = 0;
    totalEventCost: number = 0;
    selectAll: boolean = false;

  
    constructor(private eventService: EventService, private toasterService: ToastrService,
                private route:ActivatedRoute){
      
    }
    
    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName){
        this.toasterService.success(eventName);
    }
    
}
