import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import {interval, ObservableInput, takeUntil } from 'rxjs';
import { FetchAPIComponent } from '../fetch-api/fetch-api.component';
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

  constructor(private breakpointObserver: BreakpointObserver, private FetchAPIComponent: FetchAPIComponent) {
    
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
  //videos: any[];
ngOnInit() {
  
  //interval(3000).subscribe(x => )
  
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

  //this.videos = [];
  // this.FetchAPIComponent.getVideoID('AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI', 3)
  // .pipe(takeUntil(this.unsubscribe$))
  // .subscribe(lista => {
  //   for (let element of lista["items"]) {
  //     this.videos.push(element)
  //   }
  // })


}
 
};
