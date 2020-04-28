import { TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(private readonly http: HttpClient, public resources: { prefix: string; suffix: string }[] = [
  ]) {

  }

  public getTranslation(lang: string): Observable<object> {
    return forkJoin(
      this.resources.map(({ prefix, suffix }) => {
      return this.http.get(`${prefix}${lang}${suffix}`);
    })).pipe(map(response => {
      return response.reduce((a, b) => {
        return Object.assign(a, b);
      })
    }));
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateHttpLoader(http, [
    { prefix: '/pl/assets/i18n/', suffix: '.json' },
    { prefix: '/en/assets/i18n/', suffix: '.json' }
  ])
}
