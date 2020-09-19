import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../utill/shared/shared.module';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }, {
    path: 'list',
    component: UserListComponent
  }, {
    path: 'my-profile',
    component: MyProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserListComponent,MyProfileComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
