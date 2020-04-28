import { HomeComponent } from "../home/home.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

//{
//  path: 'sthg',
//    component: HomeComponent,
//      data: {
//    mode: 'sthg'
//  },
//  pathMatch: 'full'
//}
