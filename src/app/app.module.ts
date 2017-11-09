import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add.component';
import { CONST_ROUTING } from '../app.routing';
import { ViewComponent } from './view/view.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { FilterPipe } from './pipes/filter.pipe';
import { OrderOrSortPipe } from './pipes/orderOrSort.pipe';

/*for modal popup*/
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalControlsComponent } from './modalcontrols/modalcontrols.component';
import { ModalService } from './modal/modal.service';

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NotFoundComponent,
    FilterPipe,
    OrderOrSortPipe,
    ModalComponent,
    ModalControlsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    ModalModule,
    BootstrapModalModule
  ],
  providers: [MODAL_PROVIDERS, ModalService],
  bootstrap: [AppComponent]
})

export class AppModule { }
