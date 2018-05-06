import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventService } from '../services/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers:[EventService],

  bootstrap: [AppComponent]
})
export class AppModule { }
