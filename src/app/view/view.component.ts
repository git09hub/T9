import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { User } from '../models/User';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
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
  	alert('selected...'+JSON.stringify(this.selectedUser));	
	}


}