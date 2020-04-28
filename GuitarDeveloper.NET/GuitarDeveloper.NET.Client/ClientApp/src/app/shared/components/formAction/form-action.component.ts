import { FormResultEventModel } from "../../models/formResultEventModel";
import { NotifierService } from "angular-notifier";
import { TranslateService } from "@ngx-translate/core";
import { notifierModeDescription, NotifierMode } from "../../notifications/enums";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-form-action',
  templateUrl: './form-action.component.html'
})
export class FormActionComponent {
  @Input()
  public primaryButtonText: string;
  @Input()
  public secondaryButtonText: string;
  @Output()
  public result = new EventEmitter<FormResultEventModel>();

  private readonly notifierService: NotifierService;
  private readonly translateService: TranslateService;

  private readonly confirm = 'FORM.confirm';
  private readonly decline = 'FORM.decline';
  private readonly missingNames = 'FORM.missingNames'

  constructor(notifierService: NotifierService, translateService: TranslateService) {
    this.notifierService = notifierService;
    this.translateService = translateService;

    if (this.primaryButtonText === undefined || this.secondaryButtonText === undefined) {
      let message: string;
      this.translateService.get(this.missingNames)
        .subscribe((x) => {
          message = x;
        });
      this.notifierService.notify(notifierModeDescription.get(NotifierMode.Warning), message);
      this.translateService.get([this.confirm, this.decline])
        .subscribe((x) => {
          this.primaryButtonText = x[this.confirm];
          this.secondaryButtonText = x[this.decline];
        });
    }
  }

  public emitResult(incomingEvent: FormResultEventModel, isPrimary: boolean) {
    const event = new FormResultEventModel(true, !isPrimary);
    this.result.emit(event);
  }
}
