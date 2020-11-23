import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
})
export class ResourceDetailsComponent implements OnInit {
  @Input()
  public resourceId: string;
  @Output()
  public changeToRow = new EventEmitter<any>();

  // TODO services

  public vm: ResourceDetailsModel;
  public dataLoaded = false;

  constructor() {
    // TODO services
  }

  public ngOnInit() {
    // TODO interface
    //this.vm = new
    this.reloadData();
  }

  public detailsUpdate(event: any) {
    this.editingSth = this.editingSth2 = event.editing;

    this.changeToRow.emit({
      editing = event.editing;
    });
  }

  public openFormSthg() {
    this.editingSthg = true;
  }

  private reloadData(isRefreshing: boolean) {
    // TODO service, on ok this.dataLoaded = true;
  }
}
