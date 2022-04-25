import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCountryComponent } from './table-country/table-country.component';

const routes: Routes = [
  {path:'',component:TableCountryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoard { }
