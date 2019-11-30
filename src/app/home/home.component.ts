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

  Work in progress
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
