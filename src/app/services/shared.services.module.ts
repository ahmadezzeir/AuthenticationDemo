import { ConfigService } from './config.service';
import { AdalService } from './adal.service';
import { AuthenticationGuard } from './authenticated.guard';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [AdalService, ConfigService, AuthenticationGuard]
})
export class SharedServicesModule { }