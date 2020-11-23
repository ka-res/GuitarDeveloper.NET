import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { FormResultEventModel } from '../../../shared/models/formResultEventModel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-resource-form',
  templateUrl: './add-resource-form.component.html',
})
export class AddResourceFormComponent implements OnInit {
  @Output()
  public gridUpdate = new EventEmitter<FormResultEventModel>();

  // TODO services

  public dataSaved = false;

  public formBuilder: FormBuilder;
  public form: FormGroup;
  public isSubmitted: boolean;

  constructor() {
    // TODO srv init
  }

  private prepareForm() {
    this.form = this.formBuilder.group({
      // TODO fill
      active: Tools.createControl(true)
    });
  }

  public ngOnInit() {
    this.formBuilder = new FormBuilder();
    this.prepareForm();
  }

  public onSubmit() {
    // TODO srvc call
  }

  public onResult(incomingEvent: FormResultEventModel) {
    if (incomingEvent.isSuccessful) {
      this.onSubmit();
    } else {
      this.closeForm(incomingEvent.isCorrect, incomingEvent.isCancelled);
    }
  }

  public formControls() {
    return this.form.controls;
  }

  public closeForm(isCorrect: boolean, isCancelled: boolean = false) {
    const event = new FormResultEventModel(isCorrect, isCancelled);
    this.gridUpdate.emit(event);
  }

  public setFromRadio(value: number) {
    Tools.setRadioValue(this.form, 'active', value);
  }
}
