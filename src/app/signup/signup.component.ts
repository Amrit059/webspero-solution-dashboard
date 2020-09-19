import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { APP_CONSTANT } from '../constants/app.constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public title: string = String('Signup');
  userModel: UserModel = new UserModel();
  signupForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'name': new FormControl(''),
      'phoneNo': new FormControl(null),
      'zipCode': new FormControl(null, [Validators.required]),
      'mobileNo': new FormControl(null, [Validators.required]),
      'profilePic': new FormControl(''),
      'lat': new FormControl(null),
      'lng': new FormControl(null),
    });
  }

  userSignup() {
    // console.log('inside userSignup');
    navigator.geolocation.getCurrentPosition((pos) => {
      this.userModel.lat = pos.coords.latitude;
      this.userModel.lng = pos.coords.longitude;
    })
    this.userModel = this.signupForm.getRawValue();
    // console.log('userModel is ', this.userModel);
    this.userService.createUser(this.userModel).subscribe(
      (userModel: UserModel) => {
        console.log('userModel is ', userModel);
        this.router.navigate(['/login']);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }


} 



// {
//   "email": "ammysidhu059@gmail.com",
//   "lat": 30.901857499999995,
//   "lng": 75.86500339999999,
//   "mobileNo": "8146512894",
//   "name": "Amritpal Singh",
//   "password": "Amrit@123",
//   "phoneNo": "8146512894",
//   "profilePic": "",
//   "zipCode": "143411"
// }