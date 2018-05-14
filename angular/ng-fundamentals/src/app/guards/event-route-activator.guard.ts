import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../../services/event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
  
  constructor(private eventService: EventService){

  }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
      const eventExists = !!this.eventService.getEvent(route.params['id']);

      return true;
  }
}
