import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  template: `
    <img class="hero" src="assets/mash.png" />
    <h1>Project History</h1>

    <section class="container">
      <p>
        Like most people, I wanted to manage my health and fitness, but when it
        came to my diet, I felt that traditional dieting philosophies were too
        general. I wanted to be able to take a quantitive approach. I looked for
        mobile applications that would help me do this, but existing solutions
        required more time and effort than I was willing to put in and they did
        not yield actionable insightful.
      </p>
      <p>
        I knew generally what functionaly, insights, and experience I was
        looking for, and I became convinced that this was a great market
        opportunity. But how could a build something like this? Perhaps I could
        have paid someone to build it for me, but that would been expensive and
        led to an inflexible product. Heck! I'm a decent programmer. I'll just
        do it myself!
      </p>
    </section>

    <table class="overview container">
      <thead>
        <tr>
          <th>Version</th>
          <th>Framework</th>
          <th>Repository</th>
          <th>Other Technologies</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>HTML</td>
          <td>N/A</td>
          <td>CSS</td>
          <td>Basic web development 101 stuff, not worthy of a repo.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PHP</td>
          <td><a href="https://github.com/NateMay/CC_v02">CC_v02</a></td>
          <td>Twitter Bootstrap</td>
          <td>
            Hey I'm making pretty things now, but basically unfuncational.
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>PHP</td>
          <td><a href="https://github.com/NateMay/CC_v03">CC_v03</a></td>
          <td>JQuery, Twitter Bootstrap</td>
          <td>
            Let's compute HTML strings using messy imperative PHP code. JQuery
            also makes thing interactive for the first time.
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Angular.js</td>
          <td><a href="https://github.com/NateMay/CC_v04">CC_v04</a></td>
          <td>Gulp, Twitter Bootstrap</td>
          <td>
            <img src="assets/workout-app.jpg" />A legit framework and build
            tools. Now we're cooking.
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Angular 2</td>
          <td><a href="https://github.com/NateMay/CC_v05">CC_v05</a></td>
          <td></td>
          <td>
            Alright so I need to upgrade to the framework with future support.
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Angular 2</td>
          <td><a href="https://github.com/NateMay/CC_v06">CC_v06</a></td>
          <td>ngrx, express</td>
          <td>Redux (ngrx) is super helpful for managing data.</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Angular 2</td>
          <td><a href="https://github.com/NateMay/CC_v07">CC_v07</a></td>
          <td>
            Pulled the plug on the exercise side of the app. Pivot focus toward
            nutrition
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Angular 4</td>
          <td><a href="https://github.com/NateMay/CC_v08">CC_v08</a></td>
          <td>ngrx, express, MongoDB</td>
          <td>I have a database now.</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Angular 5</td>
          <td><a href="https://github.com/NateMay/CC_v09">CC_v09</a></td>
          <td>ngrx, express, MongoDB</td>
          <td>Trying out some alternative layouts.</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Angular 9</td>
          <td><a href="https://github.com/NateMay/CC_v10">CC_v10</a></td>
          <td>ngrx, firebase, Chart.js, jasmine</td>
          <td>
            Improved architecture & testing. Starting to think about charts.
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Angular 10</td>
          <td><a href="https://github.com/NateMay/cutcal">cutcal</a></td>
          <td>
            NX, nestjs, express, algolia, ngrx, firebase, highcharts, jest
          </td>
          <td>
            <img src="assets/cc_ss.png" />OK, it works, but the design is crap.
            Time for design school.
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>Angular 13</td>
          <td><a href="https://github.com/NateMay/dietstats">dietstats</a></td>
          <td>
            NX, nestjs, typeorm, husky, hammerjs, algolia, ngrx, firebase, D3.js, jest, Google Cloud
          </td>
          <td>
            <img src="assets/ds_ss.png" />Rebranded and redeisgn with mobile in
            mind.
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
