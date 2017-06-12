import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AdalService } from './../services/adal.service';

@Injectable()
export class OAuthCallbackHandler implements CanActivate {
    constructor(private router: Router, private adalService: AdalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.adalService.handleCallback();

        if (this.adalService.userInfo) {
            localStorage.setItem("token", this.adalService.accessToken);
            var returnUrl = route.queryParams['returnUrl'];
            if (!returnUrl) {
                this.router.navigate(['home']);
            } else {
                this.router.navigate([returnUrl], { queryParams: route.queryParams });
            }
        }
        else {
            this.router.navigate(['login']);
        }

        return false;
    }
}
