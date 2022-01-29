import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './views/home/home.component';
import { EspeciesComponent } from './views/especies/especies.component';
import { CommonNavbarComponent } from './shared/common-navbar/common-navbar.component';
import { PajaroComponent } from './views/especies/pajaro/pajaro.component';
import { SitiosComponent } from './views/sitios/sitios.component';
import { ParqueComponent } from './views/sitios/parque/parque.component';
import { JoinUsComponent } from './views/join-us/join-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EspeciesComponent,
    CommonNavbarComponent,
    PajaroComponent,
    SitiosComponent,
    ParqueComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',             component: HomeComponent },
      { path: 'especies',         component: EspeciesComponent },
      { path: 'especies/:id',     component: PajaroComponent },
      { path: 'sitios',           component: SitiosComponent },
      { path: 'sitios/:id',       component: ParqueComponent },
      { path: 'unete',            component: JoinUsComponent }
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
