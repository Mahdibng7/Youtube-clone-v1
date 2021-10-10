import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() Students:any;
  url:string='';
  public data:any;
  public bookmark:any;
  public bookmarkStore:any;

  title = 'youTubeProject';
  constructor() { }

  ngOnInit() {
    console.log(this.url);
  }
  addBookMark(){
    debugger;
    if (localStorage.getItem(this.url) === null)
      //First value to be stored
      this.data = [];
    else
      //There is some value already in the array
      this.data = JSON.parse(localStorage.getItem(this.url));
   
    //Push name to data array in any case
    this.data.push(this.url);
    //Update localStorage
    this.addNewUrl(this.data)
  }

  addNewUrl(url){
    let urls=[];
    if(localStorage.getItem('urls')){
      urls=JSON.parse(localStorage.getItem('urls'));
      urls=[url, ...urls];
    }
    else{
      urls=[url]
    }
    localStorage.setItem("urls",JSON.stringify(urls));
  }

  makeBookMark(){
    debugger;
    if (localStorage.getItem(this.url) === null)
      //First value to be stored
      this.bookmark = [];
    else
      //There is some value already in the array
      this.bookmark = JSON.parse(localStorage.getItem(this.url));
   
    //Push name to data array in any case
    this.bookmark.push(this.url);
    //Update localStorage
    this.addNewBookMark(this.bookmark)
    alert("Successully add in Bookmark!")
  }
  addNewBookMark(book){
    let bookurls=[];
    if(localStorage.getItem('bookurls')){
      bookurls=JSON.parse(localStorage.getItem('bookurls'));
      bookurls=[book, ...bookurls];
    }
    else{
      bookurls=[book]
    }
    this.bookmarkStore=localStorage.setItem("bookurls",JSON.stringify(bookurls));
  }
}
