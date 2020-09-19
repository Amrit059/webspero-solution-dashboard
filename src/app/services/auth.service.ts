import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  loggedIn() {
    return !!localStorage.getItem(LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
  }

  logout() {
    this.localStorageService.removeItem(LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
    this.router.navigate(['/login']);
  }

}
