import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly translateService: TranslateService;
  private readonly router: Router;

  constructor(translateService: TranslateService, router: Router) {
    this.translateService = translateService;
    this.router = router;
  }

  public ngOnInit() {
    this.router.navigateByUrl('');
  }
}
