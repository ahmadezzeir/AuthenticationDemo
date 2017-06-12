import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    constructor() {
    }
    public get getAdalConfig(): any {
        return {
            tenant: 'garybusheyoutlook.onmicrosoft.com',
            clientId: '968b3d39-f5e4-43d9-aa8c-54b4fc7ec405',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}