import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsertableComponent } from './usertable/usertable.component';
import { WebdesignComponent } from './webdesign/webdesign.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'crud', component:UsertableComponent},
  {path:'design', component:WebdesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
