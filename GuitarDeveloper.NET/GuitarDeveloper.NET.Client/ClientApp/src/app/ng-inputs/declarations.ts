import { AppComponent } from "../app.component";
import { HomeComponent } from "../home/home.component";
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { DialogComponent } from "../shared/components/dialog/dialog.component";
import { FormActionComponent } from "../shared/components/formAction/form-action.component";
import { BooleanPreviewPipe } from "../shared/others/pipes";

export const declarations: Array<any> = [
  AppComponent,
  HomeComponent,
  NavMenuComponent,
  DialogComponent,
  FormActionComponent,
  BooleanPreviewPipe
];
