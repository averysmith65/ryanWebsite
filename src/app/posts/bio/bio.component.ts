import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
  
})

  export class BioComponent implements OnInit {

    cols = '2';
    gutterSize : 'number'
    fontSize = '14px'

    displayMap = new Map([
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '1'],
      [Breakpoints.Medium, '2'],
      [Breakpoints.Large, '2'],
      [Breakpoints.XLarge, '2'],
    ]);


    fontMap = new Map([
      [Breakpoints.XSmall, '10px'],
      [Breakpoints.Small, '18px'],
      [Breakpoints.Medium, '18px'],
      [Breakpoints.Large, '19px'],
      [Breakpoints.XLarge, '14px'],
    ]);





    @ViewChild('element') element: ElementRef;

    constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {
      breakpointObserver.observe([
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
          }
        }
      })
    };
 
   // setStyle() {
   //   this.setStyle = this.breakpointObserver;
 // }


  ngOnInit() {}

  };  
