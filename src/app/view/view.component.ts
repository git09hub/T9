import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { User } from '../models/User';

/*for model popup
	http://embed.plnkr.co/mbPzd8/
*/
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  providers: [Modal]
})

export class ViewComponent implements OnInit {
  
  public filterText: string;

  usersList : any;

  selectedUser: any;
  
  constructor(private http: Http) { }

	ngOnInit() {		
		this.http.get("http://localhost:3000/readJSON").subscribe(usersList => {
	    this.usersList = usersList.json();
	  });
	}
  
  	editUser(user: User): void {
  		this.selectedUser = user;
  		this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
	}

	updateUser(selectedUser: User): void{
		this.selectedUser = selectedUser;
		alert('update...'+JSON.stringify(this.selectedUser));

	}

}