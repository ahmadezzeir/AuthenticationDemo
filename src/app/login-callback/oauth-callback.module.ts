import { NgModule } from '@angular/core';
import { OAuthCallbackComponent } from './oauth-callback.component';
import { OAuthCallbackHandler } from './oauth-callback.guard';

@NgModule({
    imports: [],
    declarations: [ OAuthCallbackComponent],
    providers: [OAuthCallbackHandler]
})
export class OAuthHandshakeModule { }