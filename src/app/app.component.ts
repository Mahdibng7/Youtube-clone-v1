import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  url:string;

  title = 'youTubeProject';
  constructor() { }

  ngOnInit() {
  }
  addBookMark(){
    debugger;
    var data;
    if (localStorage.getItem(this.url) === null)
      //First value to be stored
      data = [];
    else
      //There is some value already in the array
      data = JSON.parse(localStorage.getItem(this.url));
   
    //Push name to data array in any case
    data.push(this.url);
    //Update localStorage
    localStorage.setItem(this.url,JSON.stringify(data));
  }

}
