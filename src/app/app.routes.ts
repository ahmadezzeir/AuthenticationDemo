
import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OAuthCallbackHandler } from './login-callback/oauth-callback.guard';
import { OAuthCallbackComponent } from './login-callback/oauth-callback.component';
import { AuthenticationGuard } from "./services/authenticated.guard";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'id_token', component: OAuthCallbackComponent, canActivate: [OAuthCallbackHandler] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthenticationGuard] }
];

