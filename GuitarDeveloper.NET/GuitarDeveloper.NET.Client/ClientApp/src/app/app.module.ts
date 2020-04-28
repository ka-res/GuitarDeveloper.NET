import { AppComponent } from './app.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import '@progress/kendo-angular-intl/locales/pl/all';
import '@progress/kendo-angular-intl/locales/en/all';
import { registerLocaleData } from '@angular/common';
import { defaultTimeout as DEFAULT_TIMEOUT, TimeoutInterceptor, UploadInterceptor } from './shared/interceptor/interceptor';
import localePl from '@angular/common/locales/pl';
import { declarations } from './ng-inputs/declarations';
import { imports } from './ng-inputs/imports'
import { providers } from './ng-inputs/providers'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Location } from '@angular/common';
import { LocalizeRouterConfigLoader } from 'localize-router';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    declarations
  ],
  imports: [
    imports
  ],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    [{ provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true }],
    [{ provide: LOCALE_ID, useValue: environment.language }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 30000 }],
    Location,
    providers
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
