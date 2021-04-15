import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker-page',
  host: {class: 'container'},
  template: `
  <h1>Material Time Picker</h1>
  <div role="doc-subtitle" class="subtitle">JavaScript / Angular</div>
  <br><br>

  <div fxLayout="column" fxLayoutGap="32px" fxLayout.gt-sm="row" fxLayoutGap.gt-sm="0px">
    <div fxFlex="50%"fxLayout="row" fxLayoutAlign="space-around center">
      <cc-time-picker-input
        #timePicker
        label="My Time Picker"
        [(time)]="time"
        (timeChange)="timeChange($event)"
        width="205px"
        [placeholder]="(format.checked ? 'hh:mm' : 'hh:mm pm')"
        idStr="my-timepicker"
        [format]="(format.checked ? 24 : 12)"
      ></cc-time-picker-input>
    </div>

    <div fxFlex="50%" fxLayout="column" fxLayoutAlign="space-around center">
      <mat-slide-toggle #format>Format {{ format.checked ? '24' : '12' }}</mat-slide-toggle>
    </div>

  </div>

  <section>
    <p>
      <img class="material" src="../../assets/material.png">
      <b>What is Material Design?</b>
      <br><br>
      <a href="https://material.io/" target="_blank">Material Design</a> is an open source design system, created and maintained by Google.
      Its goal is to provide a high quality and customizable design system for organizations which cannot develop their own.
      By doing so, Material Design unifies a user's experience across platforms. It considers all platforms such as
      native Android and iOS, desktop and mobile web, as well as Desktop applications.
      I use Material Design as the design system for <a routerLink="/cutcal">CutCal</a> and for this website.
    </p>
  </section>

  <hr>

  <section>
    <p style="min-height: 200px">
      <img class="ng-material" src="../../assets/ng-material.png">
      <b>What is Angular Material?</b>
      <br><br>
      <a href="https://material.angular.io/" target="_blank">Angular Material</a> is a component library which applies
      Material Design for the <a href="https://angular.io/" target="_blank">Angular</a> framework. Although, at Citi,
      <a href="https://getbootstrap.com/2.3.2/" target="_blank"> Bootstrap</a> serves as the foundation of the UI design
      for our Digital Design Language, Angular Material has greatly inspired many of my decisions
      with respect to the library API, project architecture, and our "developers as a customer" approach to development.
    </p>
  </section>

  <hr>

  <section>
    <p>
      <b>How I Hope to Contribute.</b>
      <br><br>
      As I mention in the <a routerLink="/cutcal">CutCal</a> page, the reason existing meal and planners have
      not succeeded is because data entry is cumbersome. Because meals correspond to a time of day, I required
      a well designed time picker component, which is noticeably missing from Angular Material.
      <br><br>
      Taking inspiration from  <a href="https://agranom.github.io/ngx-material-timepicker/">ngx-material-timepicker</a>,
      I have endeavored to more closely align the UI with Material Design, and offer the quality API expect from
      consumers of Angular Material. I still have progress to make, but ultimately, I plan to make this component open
      source and will seek to merge it into the Angular Material library.
    </p>


    <br><br>

    <p>
      You will notice that my design more closely aligns with the "look and feel" of the Angular Material
      date picker than does <a href="https://agranom.github.io/ngx-material-timepicker/">ngx-material-timepicker</a>.
    </p>
    <ul>
      <li>The popup is attached to the input, rather than opening a modal experience</li>
      <li>Implements the Material Design floating label</li>
      <li>All icon addons implement the same API as other form elements</li>
      <li>Integrates with Angular's ReactiveFormsModule</li>
    </ul>
    <br><br>

    <div fxLayout="column" fxLayoutGap="32px" fxLayout.gt-sm="row" fxLayoutGap.gt-sm="0px">
      <div fxFlex="50%" fxLayout="row" fxLayoutAlign="space-around center">
        <mat-form-field>
          <input matInput [matDatepicker]="picker" placeholder="Angular Material" autocomplete="off">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </div>
      <div fxFlex="50%" fxLayout="row" fxLayoutAlign="space-around center">
        <div class="toggle-example">
            <input [ngxTimepicker]="toggleTimepicker" [disableClick]="true" readonly placeholder="ngx-material-timepicker">
            <ngx-material-timepicker-toggle [for]="toggleTimepicker"></ngx-material-timepicker-toggle>
            <ngx-material-timepicker #toggleTimepicker></ngx-material-timepicker>
        </div>
      </div>
    </div>

  </section>
  `,
  styleUrls: ['./time-picker-page.component.scss']
})
export class TimePickerPageComponent implements OnInit {

  time: string;

  constructor() { }

  ngOnInit() {
  }

  timeChange(time: string): void {
  }

  changeTimeProg(time: string): void {
    this.time = time;
  }

}
