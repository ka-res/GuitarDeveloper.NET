import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Configuration {
  public server = environment.serverUrl;
  public serverUrl = 'api/';
  public serverWithApiUrl = this.server + this.serverUrl;
  public clientUrl = environment.clientUrl;
  public language = null;

  public setLanguage() {
    this.language = environment.language;
  }
}
