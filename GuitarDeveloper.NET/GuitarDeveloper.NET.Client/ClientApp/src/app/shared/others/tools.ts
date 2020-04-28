import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

export class Tools {
  public static createControl(value: any = null): FormControl {
    const control = new FormControl();

    if (value !== null) {
      control.setValue(value);
    }

    return control;
  }

  public static showTooltip(e: MouseEvent, tooltipDir: TooltipDirective): void {
    const element = e.target as HTMLElement;
    if ((element.nodeName === 'TD' || element.nodeName === 'TH')
      && element.offsetWidth < element.scrollWidth
      && element.innerText.length > 0) {
      tooltipDir.toggle(element);
    } else {
      tooltipDir.hide();
    }
  }

  public static getVariableName(unknownVariable: any) {
    const hasItems = Object.keys(unknownVariable).length > 0;

    return hasItems
      ? Object.keys(unknownVariable)[0]
      : '';
    
  }

  public static setRadioValue(form: FormGroup, controlName: string, value: number) {
    form.controls[controlName].setValue(value === 1);
  }

  public static boolToCharacter(value: boolean) {
    return value
      ? '' //U+2713
      : ''; //U+2717
  }

  // TODO przetestowac
  public static prepareForm(controlsData: [string[], string[]]): FormGroup {
    let formGroup: FormGroup;
    let formBuilder = new FormBuilder();
    let formControls = new Array<FormControl>();

    controlsData.forEach((x) => {
      formControls.push(this.createControl(x[0]))
    });

    formGroup = formBuilder.group(formControls);

    return formGroup;
  }
}
