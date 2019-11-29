import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section>
    <h2>Design <small style="color: #999">noun</small></h2>
    <p>
      1 &nbsp;&nbsp; The process of optimizing the interface between a person and a solution or information.
    </p>
  </section>

  <section>
    <mat-card class="example-card" fxFlex="400px">
      <mat-card-header>
        <mat-card-title>Design Philosophy</mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <p>
          In this section I discuss my perspective of Design. 
        </p>
      </mat-card-content>
    </mat-card>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
