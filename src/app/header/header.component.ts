import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {MatMenuModule} from '@angular/material/menu';

import { AuthService } from "../auth/auth.service";

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

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    ) {}

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
    
  };

    

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}








