import { Component, OnInit } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {
	
  constructor() {
  	
  }

  ngOnInit() {
  }

  user = {};
  submitted = true;
  
  saveUser(u){
  	alert('saveuser...'+JSON.stringify(u));
  	this.user = u;
  	this.submitted = false;
  }

}
