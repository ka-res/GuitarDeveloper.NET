import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { Tools } from '../../shared/others/tools';

@Component({
  selector: 'app-resources-register',
  templateUrl: './resources-register.component.html',
})
export class ResourcesRegisterComponent implements OnInit {
  @ViewChild
  public tooltipDir: ToolTipDirective;

  private readonly resourceService: ResourceService;

  public gridView: GridDataResult;
  public vm: Array<ResourceRegisterModel>;
  public showCriteria = true;

  public formBuilder: FormBuilder;
  public criteriaForm: FormGroup;
  public isSubmitte = false;

  public loading = false;
  public dataLoaded = false;

  public pageSize = 15;
  public skip = 0;
  public searchButtonTitle: string;
  public sort: SortDescriptor[] = [
    {
      field: 'name',
      dir: 'asc'
    }
  ];

  public fileName: string;

  private readonly noData = 'RESOURCES.noData';

  constructor(resourceService: ResourceService) {
    this.resourceService = resourceService;
  }

  public ngOnInit() {
    this.vm = new Array<ResourceRegisterModel>();
    this.fileName = 'a';
    this.formBuilder = new FormBuilder();
    this.criteriaForm = this.formBuilder.group({
      name: new FormControl(),
      value: new FormControl()
    });
  }

  private reloadData() {
    this.vm = [];
    this.loading = true;
    // TODO service call
  }

  public onSubmit() {
    this.reloadData();
  }

  public setFromRadio(value: number) {
    this.criteriaForm.controls['isActive'].setValue(value);
  }

  public onToggleCriteriaClick() {
    this.showCriteria = !this.showCriteria;
  }

  // TODO
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.formDataSource();
  }

  public sortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.formDataSource();
  }

  private formDataSource() {
    this.gridView = {
      data: orderBy(this.vm, this.sort).slice(this.skip, this.skip + this.pageSize),
      total: this.vm.length
    };
  }

  public showTooltip(e: MouseEvent) {
    Tools.showTooltip(e, this.tooltipDir);
  }
}
