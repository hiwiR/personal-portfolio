import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private breakpointObserver :BreakpointObserver){}

  isScreenLarge(): boolean {
    return this.breakpointObserver.isMatched('(min-width: 600px)');
  }
}
