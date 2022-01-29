import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EspeciesComponent } from './views/especies/especies.component';
import { PajaroComponent } from './views/especies/pajaro/pajaro.component';
import { SitiosComponent } from './views/sitios/sitios.component';
import { ParqueComponent } from './views/sitios/parque/parque.component';
import { JoinUsComponent } from './views/join-us/join-us.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'especies',         component: EspeciesComponent },
    { path: 'especies/:id',     component: PajaroComponent },
    { path: 'sitios',           component: SitiosComponent },
    { path: 'sitios/:id',       component: ParqueComponent },
    { path: 'unete',            component: JoinUsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
