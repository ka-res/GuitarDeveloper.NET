import { Component } from '@angular/core';
import { Configuration } from './app.configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public language: string;

  constructor(configuration: Configuration, public readonly translateService: TranslateService) {
    configuration.setLanguage();

    this.translateService.setDefaultLang(configuration.language);
    this.translateService.use(configuration.language);
    // TODO use export
    this.translateService.store.langs = ['pl', 'en'];
    this.translateService.store.currentLang = configuration.language;
  }
}
