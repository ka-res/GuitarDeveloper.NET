import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import '@progress/kendo-angular-intl/locales/pl/all';
import '@progress/kendo-angular-intl/locales/en/all';
import { registerLocaleData } from '@angular/common';
import { TimeInterceptor, defaultTimeout as DEFAULT_TIMEOUT } from './shared/interceptor/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { declarations } from './ng-inputs/declarations';
import { imports } from './ng-inputs/imports'
import { providers } from './ng-inputs/providers'
import { environment } from '../environments/environment';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    declarations
  ],
  imports: [
    imports
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //HttpClientModule,
    //FormsModule,
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //])
  ],
  providers: [
    providers
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
