import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointObserver, Breakpoints,} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {MatMenuModule} from '@angular/material/menu';

import { AuthService } from "../auth/auth.service";
import { BreakPointRegistry } from "@angular/flex-layout";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  isSmallScreen$: Observable<boolean>;
  isWideScreen$:Observable<boolean>;
  

  cols = '1';
  

    displayMap = new Map([
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '1'],
      [Breakpoints.Medium, '1'],
      [Breakpoints.Large, '1'],
      [Breakpoints.XLarge, '1'],
    ]);

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    ) {};

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

      // if ( this.breakpointObserver.isMatched('(max-width: 481px)')) {
      //   console.info('The screen width is greater than 481px');
      // }
      this.isSmallScreen$ = this.breakpointObserver
        .observe([Breakpoints.Web]).pipe(map(({matches}) => matches  
    ));
    
    this.isWideScreen$ = this.breakpointObserver
        .observe([Breakpoints.Web]).pipe(map(({matches}) => !matches  
    ));
    
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
        
          
        }
      }
    })

  };

    

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}








