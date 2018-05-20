import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from '../services/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/Error404.component';

import { 
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorGuard, 
  EventListComponent, 
  EventListResolver,
  EventService,
  EventThumbnailComponent 
} from './events/index';
import { AuthService } from '../user/auth.service';

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
    EventRouteActivatorGuard,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
  
}
