import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';
import { Configuration } from '../app.configuration';
import { HostListener } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public isExpanded = false;
  public menuVisible: boolean;
  public menuTextVisible: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;
  public version: string;
  public userName: string;
  public currentLanguage: string;

  //private readonly commonService: CommonService;
  private readonly configuration: Configuration;

  constructor(@Inject(LOCALE_ID) protected localeId: string, /*commonService: CommonService,*/ configuration: Configuration) {
    //this.commonService = commonService;
    this.configuration = configuration;
    this.currentLanguage = environment.language;
  }

  public languagesList = [{
    code: 'pl',
    label: 'Polski'
  }, {
    code: 'en',
    label: 'English'
  }];

  public ngOnInit() {
    this.runInit(window.screen.width);
  }

  private setBits(screenWidth: number) {
    this.isSmall = screenWidth < 768;
    this.isMedium = screenWidth >= 768 && screenWidth <= 1024;
    this.isLarge = screenWidth > 1024;

    const screenHeight = window.screen.height;
    this.menuTextVisible = this.isLarge || (this.isSmall && screenHeight > screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.runInit(event.target.innerWidth);
  }

  private runInit(screenWidth: number) {
    this.setBits(screenWidth);
    // TODO dodac
    //this.getData();
  }

  public collapse() {
    this.isExpanded = false;
  }

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public changeLanguage(lang: string) {
    this.configuration.language = lang;
    window.location.href = `${this.configuration.serverUrl}${lang}`
  }
}
