import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-review',
  host: {class: "container"},
  template: `
    <h1>Food Review</h1>
    <div role="doc-subtitle" class="subtitle">
      JavaScript / Angular
      <button mat-button>
        <a
          class="github-link"
          href="https://github.com/NateMay/review"
          target="_blank"
          matTooltip="GitHub"
        >
          <img class="github-link" src="../../assets/github.png" />
        </a>
      </button>
    </div>
    <section>
    <p>
      <img class="pic" src="../../assets/food-review-app.png">
      <a href="http://natmay.pythonanywhere.com/" target="_blank">Food Review</a>
      Is an application that I built to support my development of <a routerLink="/cutcal">CutCal</a>
      which I'm now redesigning as <a routerLink="/diet-stats">DietStats</a>. It aggregates data from
      around the web, combining it into the structure that is needed for my search indexer,
      <a target="_blank" href="https://www.algolia.com/">Algolia</a>. The data is gathered using scraping
      techniques and open APIs. These disparate data sources are cleaned and combined using a number of
      techniques including natural language processing, machine learning, and Manual Review.
    </p>
  </section>

  <section fxLayout="row" fxLayoutGap="32px">
    <algolia></algolia>
    <p >
      This demo is primarily a mock up intended to look like my lastest
      <a routerLink="/diet-stats">DietStats</a>
      design, but <b>the search is live</b> querying the
      <a target="_blank" href="https://www.algolia.com/">Algolia</a>
      index for the food created in the Food Review application.


    </p>
  </section>
  `,
  styleUrls: ['./food-review.component.scss']
})
export class FoodReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
