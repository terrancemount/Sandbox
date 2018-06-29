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
  EventThumbnailComponent,
  CreateSessionComponent 
} from './events/index';
import { AuthService } from '../user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EventListComponent, 
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
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
