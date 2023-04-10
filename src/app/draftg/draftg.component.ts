import { Component, OnInit} from "@angular/core";
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';

@Component({
  selector: 'app-draftg',
  templateUrl: './draftg.component.html',
  styleUrls: ['./draftg.component.css']
})

export class DraftgComponent implements OnInit {

  cols = '1';
  hFontSize = '55px'
  

  displayMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '1'],
    [Breakpoints.Medium, '1'],
    [Breakpoints.Large, '1'],
    [Breakpoints.XLarge, '1'],
  ]);

  hFontSizeMap = new Map([
    [Breakpoints.XSmall, '30px'],
    [Breakpoints.Small, '50px'],
    [Breakpoints.Medium, '45px'],
    [Breakpoints.Large, '55px'],
    [Breakpoints.XLarge, '55px'],
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
          this.hFontSize = this.hFontSizeMap.get(query) as string;
          
        }
      }
    })
  };
  };

    