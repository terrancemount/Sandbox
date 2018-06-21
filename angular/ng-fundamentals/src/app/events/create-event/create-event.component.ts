import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
      em{ float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color:#999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color:999; }
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  newEvent:any;

  constructor(private router: Router) { }


  ngOnInit():void {
  }

  saveEvent(formValues){
    console.log(formValues);
  }

  cancel():void {
    this.router.navigate(['/events']);
  }

}
