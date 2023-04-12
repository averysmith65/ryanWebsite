import { Component, OnInit, Sanitizer } from '@angular/core';
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import {interval, ObservableInput, takeUntil } from 'rxjs';
import { FetchAPIComponent } from '../fetch-api/fetch-api.component';
import { DomSanitizer } from "@angular/platform-browser"
import fetch from 'node-fetch';
import { Subscription } from "rxjs";
//import { HttpClient } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  cols = '3';
  gutterSize = '7px';
  rowHeight = '500px';

  unsubscribe$: ObservableInput<any>;

  constructor(private breakpointObserver: BreakpointObserver, private FetchAPIComponent: FetchAPIComponent, private sanitizer:DomSanitizer) {
    
  };
  displayMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '1'],
    [Breakpoints.Medium, '2'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3'],
  ]);

  gutterMap = new Map([
    [Breakpoints.XSmall, '5px'],
    [Breakpoints.Small, '5px'],
    [Breakpoints.Medium, '10px'],
    [Breakpoints.Large, '15px'],
    [Breakpoints.XLarge, '15px'],
  ]);


  rowHeightMap = new Map([
    [Breakpoints.XSmall, '315px'],
    [Breakpoints.Small, '315px'],
    [Breakpoints.Medium, '350px'],
    [Breakpoints.Large, '500px'],
    [Breakpoints.XLarge, '500px'],
  ]);

  i = 0;
  vid1 = '';
  vid2 = '';
  vid3 = '';
  url1 = 'https://www.youtube.com/embed/';
  sUrl1 = '';
  sUrl2 = '';
  sUrl3 = '';
  tUrl1;
  tUrl2;
  tUrl3;

  async getVideoId() {
    const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=3&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyBMRQ-7Qlr1MKMafBTMpNO3IrnkSuneQ9c');
    const data = await response.json();

    this.vid1 = (data.items[0].contentDetails.videoId);
    this.vid2 = (data.items[1].contentDetails.videoId);
    this.vid3 = (data.items[2].contentDetails.videoId);

    this.sUrl1 = this.url1 + this.vid1
    this.sUrl2 = this.url1 + this.vid2
    this.sUrl3 = this.url1 + this.vid3
    this.tUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl1)
    this.tUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl2)
    this.tUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl3)
  }

  async ngOnInit() {
  
    const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=3&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyBMRQ-7Qlr1MKMafBTMpNO3IrnkSuneQ9c');
    const data = await response.json();

    this.vid1 = (data.items[0].contentDetails.videoId);
    this.vid2 = (data.items[1].contentDetails.videoId);
    this.vid3 = (data.items[2].contentDetails.videoId);

    

    this.sUrl1 = this.url1 + this.vid1
    this.sUrl2 = this.url1 + this.vid2
    this.sUrl3 = this.url1 + this.vid3
    this.tUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl1)
    this.tUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl2)
    this.tUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.sUrl3)
    
    console.log(this.url1 + this.vid1)

      
  
  
  this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ]).subscribe(result =>{
    for(const query of Object.keys(result.breakpoints)) {
      if (result.breakpoints[query]) {
        this.cols = this.displayMap.get(query) as string;
        this.gutterSize = this.gutterMap.get(query) as string;
        this.rowHeight = this.rowHeightMap.get(query) as string;
      }
    }
  })

   setInterval(() => {
     this.getVideoId();
   }, 60000 * 60)



}
 
};


//