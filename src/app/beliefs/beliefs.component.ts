import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefs',
  template: `
  <section>
    <h2>My Design Proposition</h2>
    <br>
    <p>
      Design is most effective as an interative process that applies the scientific method. Unfortunately,
      this iteration can be time consuimng and costly. If the cost of iteration out weights the benefits,
      then design stalls.

    </p>
  </section>
    <section>
      <h2>Design Architecture > Design Skill</h2>
      <br>
      <p>
        <img class="process" src="../../assets/process.png">
        Design is most effective as an interative process that applies the scientific method. Unfortunately,
        this iteration can be time consuimng and costly. If the cost of iteration out weights the benefits, 
        then design stalls.

      </p>
    </section>
  `,
  styleUrls: ['./beliefs.component.scss']
})
export class BeliefsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
