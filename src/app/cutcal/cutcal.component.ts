import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `
  <p>Native <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> elements are always used in order to provide the most straightforward
  and accessible experience for users. A <code>&lt;button&gt;</code> element should be used whenever some <em>action</em>
  is performed. An <code>&lt;a&gt;</code> element should be used whenever the user will <em>navigate</em> to another view.</p>
  `,
  styleUrls: ['./cutcal.component.scss']
})
export class CutcalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
