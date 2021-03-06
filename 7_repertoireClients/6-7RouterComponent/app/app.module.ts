import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './app.component';
import {AppFormulaireClientsComponent} from './app.formulaire-clients.component';
import {AppDetailsClientsComponent} from './app.details-clients.component';
import { routing } from './app.routing'


  @NgModule({
    imports: [ 
      BrowserModule, 
      FormsModule,
      routing
      ],
    declarations: [
      AppComponent, 
      AppFormulaireClientsComponent, 
      AppDetailsClientsComponent], 
    bootstrap: [ AppComponent ]
  })

  export class AppModule {
  }

