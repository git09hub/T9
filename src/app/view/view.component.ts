import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {
  
  usersList : any;
  constructor(private http: Http) { 
  	this.usersList = this.http.get("../users.json");
  	alert(JSON.stringify(this.usersList));
    console.log(this.usersList);
  }

  ngOnInit() {	
  }
}
