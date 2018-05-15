import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: []
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  constructor(private router: Router) { }

  ngOnInit():void {
  }

  cancel():void {
    this.router.navigate(['/events']);
  }

}
