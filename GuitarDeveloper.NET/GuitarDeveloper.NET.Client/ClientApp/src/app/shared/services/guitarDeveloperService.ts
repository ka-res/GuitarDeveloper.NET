import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Configuration } from "../../app.configuration";
import { Extensions } from "../others/extensions";

@Injectable()
export class GuitarDeveloperService {
  protected readonly http: HttpClient;
  private readonly configuration: Configuration;

  constructor(http: HttpClient, configuration: Configuration) {
    this.http = http;
    this.configuration = configuration;
  }

  public get(serviceName: string, performanceName: string, parameters: any[] = null, parameterNames: any[] = null) {
    const actionUrl = Extensions.getActionUrl(this.configuration.serverWithApiUrl, serviceName);
    performanceName = this.toPascalCase(performanceName);

    if (parameters === null) {
      return this.http.get(actionUrl + performanceName,
        {
          withCredentials: true
        });
    } else if (parameters.length === parameterNames.length) {
      const params = new HttpParams();
      for (let i = 0; i < parameters.length; i++) {
        params.set(parameters[i], parameterNames[i]);
      }

      return this.http.get(actionUrl + performanceName,
        {
          params: params,
          withCredentials: true
        });
    } else {
      return null;
    }
  }

  public post(serviceName: string, performanceName: string, data: any) {
    const actionUrl = Extensions.getActionUrl(this.configuration.serverWithApiUrl, serviceName);
    performanceName = this.toPascalCase(performanceName);

    return this.http.post(actionUrl + performanceName, { data }, { withCredentials: true });
  }

  // TODO move
  private toPascalCase(input: string): string {
    if (input.length > 0) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    } else {
      return null;
    }
  }
}
