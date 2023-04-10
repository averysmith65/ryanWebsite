import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
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

  constructor(private breakpointObserver: BreakpointObserver) {};


ngOnInit() {
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
}

};
