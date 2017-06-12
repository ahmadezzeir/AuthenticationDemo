import { OAuthCallbackHandler } from './login-callback/oauth-callback.guard';
import { OAuthCallbackComponent } from './login-callback/oauth-callback.component';
import { OAuthHandshakeModule } from './login-callback/oauth-callback.module';
import { SharedServicesModule } from './services/shared.services.module';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutService } from "./about/about.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OAuthHandshakeModule,
    SharedServicesModule,
    AuthModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AboutService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
