import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';


//declare let Calendly: any;

@Component({
  selector: 'app-letstalk',
  templateUrl: './letstalk.component.html',
  styleUrls: ['./letstalk.component.css']
})

  export class LetsTalkComponent implements OnInit {

    
    fontSize = '14px'

    fontMap = new Map([
      [Breakpoints.XSmall, '12px'],
      [Breakpoints.Small, '14px'],
      [Breakpoints.Medium, '16px'],
      [Breakpoints.Large, '19px'],
      [Breakpoints.XLarge, '19px'],
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
          this.fontSize = this.fontMap.get(query) as string;
        }
      }
    })
  }
  
  };  
  
  // @ViewChild('container') container: ElementRef;

  //   ngOnChanges() {
  //     Calendly.initInlineWidget({
  //       url: 'https://calendly.com/footballfanalystsnetwork',
  //       parentElement: this.container.nativeElement
  //     });
  // }

