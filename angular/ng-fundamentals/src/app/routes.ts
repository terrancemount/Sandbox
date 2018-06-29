import { Routes } from '@angular/router';
import { Error404Component } from './errors/Error404.component';
import { 
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivatorGuard, 
    EventListComponent, 
    EventListResolver, 
    CreateSessionComponent
} from './events/index';

//import { UserModule } from '../user/user.module';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventListComponent, resolve: {events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard] },
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: '../user/user.module#UserModule'}
]