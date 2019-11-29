import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefs',
  template: `
    <section>
      <h3>Design <small style="color: #999">noun</small></h3>
      <p>
        The process of optimizing the interface between a person and a solution or information source.
      </p>
    </section>
    <br><hr><br>
    <h2>My Perspective on Design</h2>

    <section>
      <h3>The Obligation to Provide Utility</h3>
      <p>

      </p>
    </section>

    <section>
      <h3>Design Architecture > Design Skill</h3>
      <br>
      <p>
      https://www.mckinsey.com/business-functions/mckinsey-design/our-insights/the-business-value-of-design
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
