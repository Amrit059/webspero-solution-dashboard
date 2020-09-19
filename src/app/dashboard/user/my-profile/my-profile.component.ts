import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public title: string = String('My Profile');
  userModel: UserModel = new UserModel();
  myProfileForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.getUserById()

  }

  getUserById() {
    this.userService.getUserById().subscribe(
      (userModel: UserModel) => {
        this.userModel = userModel;
        console.log(JSON.stringify(this.userModel))
        this.myProfileFormFunction();
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  myProfileFormFunction() {
    this.myProfileForm = new FormGroup({
      'password': new FormControl(this.userModel.password),
      'email': new FormControl(this.userModel.email),
      'name': new FormControl(this.userModel.name),
      'phoneNo': new FormControl(this.userModel.phoneNo),
      'mobileNo': new FormControl(this.userModel.mobileNo),
      'profilePic': new FormControl(''),
    });
  }

  updateUserProfile() {
    // console.log('inside myProfileForm');
    this.userModel = this.myProfileForm.getRawValue();
    // console.log('userModel is ', this.userModel);
    this.userService.updateUser(this.userModel).subscribe(
      (userModel: UserModel) => {
        // console.log('userModel is ', userModel);
        this.router.navigate(['/dashboard/users']);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }
}
