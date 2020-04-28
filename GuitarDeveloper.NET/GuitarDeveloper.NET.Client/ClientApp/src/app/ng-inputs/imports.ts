import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { routes } from './routes';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from '../shared/notifications/notifierOptions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalizeParser, LocalizeRouterSettings, LocalizeRouterModule } from 'localize-router';
import { LocalizeRouterHttpLoader } from 'localize-router-http-loader';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../shared/locales/customTranslateHttpLoader';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { WindowModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { EditorModule } from '@progress/kendo-angular-editor';
import { LayoutModule, PanelBarModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { UploadModule } from '@progress/kendo-angular-upload';

export function getDefaultLang() {
  return environment.language;
}

export function getFactory(translateService: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translateService, location, settings, http);
}

export const imports: Array<any> = [
  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
  IntlModule,
  ExcelModule,
  HttpClientModule,
  FormsModule,
  RouterModule.forRoot(routes),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }),
  LocalizeRouterModule.forRoot(routes, {
    parser: {
      provide: LocalizeParser,
      useFactory: getFactory,
      deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
    },
    defaultLangFunction: getDefaultLang
  }),
  ReactiveFormsModule,
  NotifierModule.withConfig(customNotifierOptions),
  InputsModule,
  BrowserAnimationsModule,
  DropDownsModule,
  DateInputsModule,
  ButtonsModule,
  GridModule,
  WindowModule,
  DialogsModule,
  PopupModule,
  UploadModule,
  TooltipModule,
  EditorModule,
  LayoutModule,
  PanelBarModule
];
