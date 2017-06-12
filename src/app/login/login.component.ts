import { Router } from '@angular/router';
import { AdalService } from './../services/adal.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private adalService: AdalService) { }

    ngOnInit() {
        console.log(this.adalService.userInfo);
    }

    login() {
        this.adalService.login();
    }

    logout() {
        this.adalService.logout();
    }

    public get isLoggedIn() {
        return this.adalService.isAuthenticated;
    }
}