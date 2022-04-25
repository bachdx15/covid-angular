import { CountryComponent } from './components/regione/country.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'dashboard',loadChildren:()=>import('./components/dash-board/ranking.routing').then(mod=>mod.DashBoard)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
