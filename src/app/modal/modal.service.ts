import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class ModalService {

  constructor() { }

  private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        let modalToRemove = _.findWhere(this.modals, { id: id });
        this.modals = _.without(this.modals, modalToRemove);
    }

    open(id: string) {
        alert(this.modals.length+'open in model.service--'+id);
        let modal = _.findWhere(this.modals, { id: id });
        alert(modal);
        modal.open();
    }

    close(id: string) {
        // close modal specified by id
        let modal = _.find(this.modals, { id: id });
        modal.close();
    }

}
