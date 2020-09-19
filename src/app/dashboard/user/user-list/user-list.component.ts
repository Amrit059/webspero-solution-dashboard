import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userModel: UserModel[] = [];

  lat: Number
  lng: Number
  constructor(
    private _userServices: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getUserList(pos.coords.latitude, pos.coords.longitude);
    })
  }

  getUserList(lat: Number, lng: Number) {
    this.lat = lat
    this.lng = lng;
    this._userServices.getUserList(lat, lng).subscribe(
      (usermodel: UserModel[]) => {
        this.userModel = usermodel;
      }, (error: HttpErrorResponse) => {
        this.authService.logout()
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  backButton() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getUserList(pos.coords.latitude, pos.coords.longitude);
    })
  }

}
