import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mycomponent',component:MycomponentComponent},
  {path:'employees',component:EmplistComponent},
  {path:'addmovie',component:AddmovieComponent},
  {path:'movielist',component:MovielistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
