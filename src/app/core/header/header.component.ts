import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public coreService: CoreService) { }

  ngOnInit() { }

  logout(){
    this.coreService.put('update/user/active/status',{},{}).subscribe((data)=>{
      console.log('inside logout sucess ');
      this.authService.logout()
    }, (err)=>{
      console.log('inside error is ', err)
    });
  }
}
