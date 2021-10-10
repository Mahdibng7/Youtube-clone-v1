import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public bookmarksShowing:any;
  constructor() { }

  ngOnInit() {
    this.bookmarksShowing = JSON.parse(localStorage.getItem("bookurls"));
  }

}
