import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import {AboutmeComponent } from './aboutme/aboutme.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BsDropdownModule, ModalModule, PaginationModule, DatepickerModule, TabsModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    AboutmeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,NgxChartsModule,
    RouterModule.forRoot([
      {path : 'home', component:HomeComponent},
      {path : 'about-me', component:AboutmeComponent},
      {path : 'skills', component:SkillsComponent},
      {path : '**' , component : HomeComponent}

    ]), 
    HttpModule,
    BrowserAnimationsModule,
   BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }