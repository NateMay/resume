import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  template: `
    <header class="header">
      <div>
        <ng-content></ng-content>
      </div>
    </header>
  `,
  host: {class: 'hero'},
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
