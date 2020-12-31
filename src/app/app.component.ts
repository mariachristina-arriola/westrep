import { Component, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import { ChangeDetectorRef, AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, AfterContentChecked{

  //vars for calculating the difference in current year vs founding year and dean takeover year using moment.js
  public ogDiff;
  public deanDiff;

  constructor(private cdref: ChangeDetectorRef) { }

  title = 'Westrep Enterprises';

  //calls differenceInYears function to grab the right dates for the 'About Us'
  //tbh not sure if this function call is redundant with having ngAfterContentChecked(); but leaving it in just in case
  ngAfterViewInit() {
    this.differenceInYears();
  }

  //calls differenceInYears function while detecting changes like an auto refresh, etc.
  ngAfterContentChecked() {
    this.cdref.detectChanges();
    this.differenceInYears();
  }

  //ogDiff = years since founding
  //deanDiff = years since dean took over as owner
  differenceInYears() {
    this.ogDiff = moment([1968, 0, 1]).fromNow(true);
    this.deanDiff = moment([1992, 0, 1]).fromNow();
  }
}
