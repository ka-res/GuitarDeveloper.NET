import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { FormResultEventModel } from '../../../shared/models/formResultEventModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { SortDescriptor } from '@progress/kendo-data-query';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';
import { DictionaryType } from '../common/enums';

@Component({
  selector: 'app-dictionary-panel',
  templateUrl: './dictionary-panel.component.html',
})
export class DictionaryPanelComponent implements OnInit {
  @ViewChild(TooltipDirective)
  public tooltipDir: TooltipDirective;
  @ViewChild(DictionaryRegisterComponent)
  public dictionaryRegisterComponent: DictionaryRegisterComponent;

  // TODO services

  public vm: Array<PanelBarItemModel>;
  public dictionariesFocus: Array<DictionariesFocusModel>;
  public dictionaryTypes = DictionaryType;
  public selectedDictionary: DictionariesFocusModel;

  public dataLoaded = false;
  public isAdding = false;

  public pageSize = 15;
  public skip = 0;
  public searchButtonTitle: string;
  public sort: SortDescriptor[] = [
    {
      field: 'name',
      dir: 'asc'
    }];

  // TODO constr

  public reloadRegister() {
    this.dictionaryRegisterComponent.reloadData(this.selectedDictionary.type);
  }

  public ngOnInit() {
    this.vm = new Array<PanelBarItemModel>();
    this.dictionariesFocus = new Array<DictionariesFocusModel>();
    const keys = Object.keys(DictionaryType);
    keys.forEach((x) => {
      if (isNan(Number(x))) {
        const key = new DictionariesFocusModel(DictionaryType[x]);
        this, this.dictionariesFocus.push(key);
      }
    });

    if (this.dictionariesFocus.length > 0) {
      this.dictionariesFocus[0].focuse = true;
      this.selectedDictionary = this.dictionariesFocus[0];
    }

    this.reloadData();
  }

  private reloadData() {
    this.vm = [];
    // TODO action
    // this.vm.push({id: x.id, title: x.name, children: []} as PanelBarItemModel)
    //setactive
  }

  private setActivePanelBarItem() {
    const focusItem = this.dictionariesFocus.find((x) => x.focused);
    if (focusItem !== null) {
      const tabToActivate = this.vm.find((x) => Number(x.id) - 1 === focusItem.type);
      tabToActivate.selected = true;
    }
  }

  public onPanelStateChange(event: Array<any>) {
    if (event.length > 0) {
      const newItem = event.find((x) => x.focused);
      const focusItem = this.dictionariesFocus.find((x) => x.type === +newItem.id - 1);
      if (focusItem !== null) {
        focusItem.focused = true;
        this.dictionariesFocus
          .filter((x) => x.type !== focusItem.type)
          .forEach((y) => y.focused = false);
      }

      this.selectedDictionary = focusItem;
      this.reloadRegister();
    }
  }
}
