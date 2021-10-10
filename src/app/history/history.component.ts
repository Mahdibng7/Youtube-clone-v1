import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  data:string[];
  demo:string[];
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("urls"));
  }

  selectedUrl(event){
    debugger;
  let selectedvalue=[];
  selectedvalue.push(this.data[event]);
  localStorage.setItem("selectValue",JSON.stringify(selectedvalue));
  // console.log(this.data[event]);
  // alert(this.data[event]);
  }
}
