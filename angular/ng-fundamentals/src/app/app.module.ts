import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventService } from '../services/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from '../services/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/Error404.component';
import { EventRouteActivatorGuard } from './guards/event-route-activator.guard';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers:[
    EventService, 
    ToastrService,
    EventRouteActivatorGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
