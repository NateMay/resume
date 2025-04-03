import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chipotle',
    template: `
    <img class="hero" src="../../assets/chipotle.png" />
    <h1>Chipotle Nutrition Analyzer</h1>
    <br>
    <section class="container">
      <p>
        I built the <a href="https://chipotle-nutrition-analyzer.web.app/" target="_blank">Chipotle Nutrition Analyzer</a>
        as the final project in a data visualization course at the University of Michigan. I use angular for the frontend and 
        D3.js at the charing library. 
      </p>
    </section>
  `,
    styleUrls: ['./chipotle.component.scss'],
    standalone: false
})
export class ChipotleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
