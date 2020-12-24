import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements AfterViewInit {
  @ViewChild('container', {static: false}) container: ElementRef<HTMLElement>;
  el: HTMLElement;

  constructor() {
    
  }

  ngAfterViewInit() {
    console.log("website visited")
  }

  switchTheme() {
    console.log('switch theme');
    this.el.classList.toggle('theme-alternate');
   
  }
  title = 'Westrep Enterprises';

}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

