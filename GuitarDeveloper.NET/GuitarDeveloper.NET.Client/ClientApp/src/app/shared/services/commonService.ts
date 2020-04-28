import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Configuration } from "../../app.configuration";
import { Extensions } from "../others/extensions";
import { forkJoin } from "rxjs";

@Injectable()
export class CommonService {
  private readonly actionUrl: string;
  private readonly http: HttpClient;

  constructor(
    http: HttpClient,
    configuration: Configuration) {
    this.http = http;
    this.actionUrl = Extensions.getActionUrl(configuration.serverWithApiUrl, this.constructor.name);
  }

  public getVersion() {
    return this.http.get(this.actionUrl + 'GetVersion',
      {
        withCredentials: true
      });
  }

  public getUserName() {
    return this.http.get(this.actionUrl + 'GetUserName',
      {
        withCredentials: true
      });
  }

  public getCommonData() {
    const versionResponse = this.getVersion();
    const userNameResponse = this.getUserName();

    return forkJoin([versionResponse, userNameResponse]);
  }
}
