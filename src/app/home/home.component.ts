import { AdalService } from './../services/adal.service';
import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private adalService: AdalService){
    console.log('User info from JWT');
    console.log(this.adalService.userInfo);
    console.log('JWT Token');
    console.log(this.adalService.accessToken);
    //localStorage.setItem("token", this.adalService.accessToken);
  }
}
