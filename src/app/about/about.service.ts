import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import {AuthHttp} from 'angular2-jwt';

import { ResourceGroups } from './resourcegroups';

@Injectable()
export class AboutService{

    //private machineURL = window.location.protocol + "//" + window.location.host;
    //private machineURL = myGlobals.remoteURL;

    headers: Headers;
    options: RequestOptions;
 
    errormsg: string;

    constructor(private http: Http, 
    private authhttp: AuthHttp) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    //Get all users in a list (may only contain 1 entry)
    getResourceGroups() {
        return this.authhttp.get("http://localhost:64564/api/resourcegroups")
            .map(response => <ResourceGroups[]>response.json())
            .catch(this.handleError);
    }


    //Handle errors.  Not the real way to do it
    private handleError(error: any): Promise<any> {
        console.error('An Error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

} 