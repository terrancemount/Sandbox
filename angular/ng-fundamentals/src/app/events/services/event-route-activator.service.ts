import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
  
  constructor(private eventService: EventService, private router:Router){

  }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const event = this.eventService.getEvent(Number(route.params['id']));
      if (event === undefined){
        this.router.navigate(['/404']);
        return false;
      }
      return true;
  }
}
