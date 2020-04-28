import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormResultEventModel } from "../../models/formResultEventModel";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  @Input()
  public questionInput: string;
  @Output()
  public dialogResult = new EventEmitter<FormResultEventModel>();

  private readonly translateSevice: TranslateService;

  private readonly yes = 'FORM.yes';
  private readonly no = 'FORM.no';

  public yesMessage: string;
  public noMessage: string;

  constructor(translateService: TranslateService) {
    this.translateSevice = translateService;
    this.translateSevice.get([this.yes, this.no])
      .subscribe((x) => {
        this.yesMessage = x[this.yes];
        this.noMessage = x[this.no];
      });
  }

  public setOutput(value: boolean) {
    const event = new FormResultEventModel(true, value);
    this.dialogResult.emit(event);
  }

  public onResult(incomingEvent: FormResultEventModel) {
    this.setOutput(incomingEvent.isSuccessful);
  }
}
