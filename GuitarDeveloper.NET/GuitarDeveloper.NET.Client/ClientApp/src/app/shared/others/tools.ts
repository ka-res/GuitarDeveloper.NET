import { FormControl, FormGroup } from '@angular/forms';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

export class Tools {
  public static createControl(value: any = null): FormControl {
    const control = new FormControl();

    if (value !== null) {
      control.setValue(value);
    }

    return control;
  }

  //public static 
}
