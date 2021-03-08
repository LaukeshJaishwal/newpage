import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CsitComponent } from './csit/csit.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BcaComponent } from './bca/bca.component';
import { Plus2Component } from './plus2/plus2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { appRoute } from "./app.Route";
import { CproComponent } from './cpro/cpro.component';
import { FITComponent } from './fit/fit.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CsitComponent,
    HomeComponent,
    AboutComponent,
    BcaComponent,
    Plus2Component,
    CproComponent,
    FITComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
