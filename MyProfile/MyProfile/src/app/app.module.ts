import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BsDropdownModule, ModalModule, PaginationModule, DatepickerModule, TabsModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    SkillsComponent,
    ContactComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule, NgxChartsModule,
    RouterModule.forRoot([
      {path : 'home', component:HomeComponent, data: {depth: 1}},
      {path : 'about-me', component:AboutmeComponent, data: {depth: 2}},
      {path : 'skills', component:SkillsComponent , data: {depth: 3}},
      {path : 'contact' , component :ContactComponent, data: {depth: 4}},
      {path: '', redirectTo: 'home', pathMatch: 'full', data: {depth: 1}},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}

    ]), 
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
