import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add.component';
import { CONST_ROUTING } from '../app.routing';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }