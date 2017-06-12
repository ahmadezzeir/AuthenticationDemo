import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AdalService } from './../services/adal.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router, private adalService: AdalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let navigationExtras: NavigationExtras = {
            queryParams: { 'redirectUrl': route.url }
        };

        if (!this.adalService.userInfo) {
            this.router.navigate(['login'], navigationExtras);
        }

        return true;
    }
}
