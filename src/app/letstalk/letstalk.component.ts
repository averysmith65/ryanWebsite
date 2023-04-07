import { Component, ElementRef, ViewChild } from '@angular/core';

declare let Calendly: any;

@Component({
  selector: 'app-letstalk',
  templateUrl: './letstalk.component.html',
  styleUrls: ['./letstalk.component.css']
})
export class LetstalkComponent {
  
  // @ViewChild('container') container: ElementRef;

  //   ngOnChanges() {
  //     Calendly.initInlineWidget({
  //       url: 'https://calendly.com/footballfanalystsnetwork',
  //       parentElement: this.container.nativeElement
  //     });
  // }
}
