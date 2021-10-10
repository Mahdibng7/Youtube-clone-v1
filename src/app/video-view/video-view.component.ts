import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
// const getVideoId = require('get-video-id');
import getVideoId from 'get-video-id';
// declare const YouTubeGetID: any;
@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  public readyQue:any;
  public StartNow:any;
  public playNow:any;
  public readyhistoryUrl:any;
  public starthistory:any;
  constructor() { }

  ngOnInit() {
   debugger;
   this.readyhistoryUrl = JSON.parse(localStorage.getItem("selectValue"));
   if(this.readyhistoryUrl==null || this.readyhistoryUrl==''){
    this.readyQue = JSON.parse(localStorage.getItem("urls"));
    this.StartNow = this.readyQue[0];
    debugger
    const { id } = getVideoId(this.StartNow.toString())
    this.playNow = id;
    console.log(this.playNow);
   }
   else{
    this.readyhistoryUrl = JSON.parse(localStorage.getItem("selectValue"));
    this.starthistory = this.readyhistoryUrl[0];
    const { id } = getVideoId(this.starthistory.toString())
    this.playNow = id
     localStorage.setItem("selectValue",JSON.stringify(null));
   }
    // localStorage.setItem("selectValue",JSON.stringify(null));
    // new YouTubeGetID(this.StartNow);
  }
  //  YouTubeGetID(url){
  //   var ID = '';
  //   url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  //   if(url[2] !== undefined) {
  //     ID = url[2].split(/[^0-9a-z_\-]/i);
  //     ID = ID[0];
  //   }
  //   else {
  //     ID = url;
  //     console.log(ID)
  //   }
  //     return ID;
  //     console.log(ID)
  // }
  
}
