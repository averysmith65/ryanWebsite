import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
  
})

  export class BioComponent implements OnInit {

    cols = '2';
    fontSize = '14px'
    rowHeight = '500px'
    gutterSize = '7px'
    hFontSize = '55px'

    displayMap = new Map([
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '1'],
      [Breakpoints.Medium, '2'],
      [Breakpoints.Large, '2'],
      [Breakpoints.XLarge, '2'],
    ]);


    fontMap = new Map([
      [Breakpoints.XSmall, '9.5px'],
      [Breakpoints.Small, '15px'],
      [Breakpoints.Medium, '15px'],
      [Breakpoints.Large, '18px'],
      [Breakpoints.XLarge, '18px'],
    ]);

    rowHeightMap = new Map([
      [Breakpoints.XSmall, '300px'],
      [Breakpoints.Small, '400px'],
      [Breakpoints.Medium, '450px'],
      [Breakpoints.Large, '500px'],
      [Breakpoints.XLarge, '500px'],
    ]);

    gutterMap = new Map([
      [Breakpoints.XSmall, '1px'],
      [Breakpoints.Small, '2px'],
      [Breakpoints.Medium, '20px'],
      [Breakpoints.Large, '40px'],
      [Breakpoints.XLarge, '40px'],
    ]);
  
    hFontSizeMap = new Map([
      [Breakpoints.XSmall, '30px'],
      [Breakpoints.Small, '45px'],
      [Breakpoints.Medium, '45px'],
      [Breakpoints.Large, '55px'],
      [Breakpoints.XLarge, '55px'],
    ]);



    @ViewChild('element') element: ElementRef;

    constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {};
 
  

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
          this.fontSize = this.fontMap.get(query) as string;
          this.rowHeight = this.rowHeightMap.get(query) as string;
          this.gutterSize = this.gutterMap.get(query) as string;
          this.hFontSize = this.hFontSizeMap.get(query) as string;
        }
      }
    })
  };

  };  
