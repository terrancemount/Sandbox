import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em{ float:right; color:#E05C65; padding-left: 10px;}
      .error input {backgound-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color:#999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color:999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService:AuthService){}
  
  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }
}