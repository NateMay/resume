import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citi',
  template: `
  <img class="logo" src="../../assets/citibank.png">
  <br><br><br>

  <section>
    <h2>My Team</h2>
    <p style="min-height: 300px">
      <span class="arrow">That's me &#10549; </span>
      <img class="team" src="../../assets/team.jpg">
      This is my team: the <b>Common UI</b> team. We mangage libraries of reuseable web components
      for several JavaScript frameworks and Citi applications. These libraries ahere to
      Citi's design system, which we call the <b>Digital Design Language</b> (DDL).
      <a href="https://online.citi.com/US/login.do/" target="_blank">Citi Bank Online</a>&nbsp;(CBOL) is the most 
      notable Citi application that we service, leveraging >10,000 instances of our components.
      <br><br>
      While I was a contractor, Citi transitioned to a new frontend framework called
      <a href="https://angular.io/" target="_blank">Angular</a> and I was able to personally implement many of our componets
      that I showcase below. After being hired in as technical lead, I have had the opportunity
      to architect an ecosystem around this, now our primary, library.
    </p>
  </section>
  <section fxLayout="column">
    <h2>My Work</h2><br>
    <div fxLayout="row">

      <mat-card class="example-card" fxFlex="400px">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Tour of Common UI Components</mat-card-title>
          <mat-card-subtitle>Angular implementation</mat-card-subtitle>
        </mat-card-header>

        <video width="400" controls mat-card-image alt="Citi's Common UI Component team tour">
          <source src="mov_bbb.mp4" type="video/mp4">
          <source src="mov_bbb.ogg" type="video/ogg">
          Your browser does not support HTML5 video.
        </video>

        <mat-card-content>
          <p>
            Citi's intellectual property cannot leave its private network, so I'll give you a video tour.
          </p>
        </mat-card-content>
      </mat-card>

      <div  fxFlex="calc(100% - 400px)">
        <p>
        To keep up with the rapidly evolving <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
        ecosytem, achieve complience, and facilitate Citi's development tempo, our team has been able to implement the 
        following features at my direction.
        </p>
        <mat-list>
          <mat-list-item>
            <mat-icon>check</mat-icon>&nbsp;
            Adheres to Citi's Digital Design Language
          </mat-list-item>
          <mat-list-item>
            <mat-icon>check</mat-icon>&nbsp;
            Certified for <a href="https://www.w3.org/TR/WCAG20/">&nbsp; WCAG 2.0 AA</a> &nbsp;accessibility complience 
          </mat-list-item>
          <mat-list-item>
            <mat-icon>check</mat-icon>&nbsp;
            Compatible with &nbsp;<a href="https://www.youtube.com/watch?v=GQzn7XRdzxY" target="_blank">server-side rendering</a> 
          </mat-list-item>
          <mat-list-item>
          <mat-icon>check</mat-icon>&nbsp;
            Robust Documentation (see video)
          </mat-list-item>
          <mat-list-item>
            <mat-icon>check</mat-icon>&nbsp;
            Packaged as an &nbsp;<a href="https://www.w3schools.com/whatis/whatis_npm.asp" target="_blank">NPM Library</a>
          </mat-list-item>
        </mat-list>
      </div>

    </div>

  </section>

  <mat-tab-group>

    <mat-tab label="Digital Design Language">
      Documentation / API
    </mat-tab>

    <mat-tab label="Higher-Order Design">
      Documentation / API
    </mat-tab>

    <mat-tab label="Processes">
      Quarterly Merge
      Support
      NPM
    </mat-tab>

    <mat-tab label="Adoption">
      <p>
        We've measured, and adoption of our components has accelerated while defect rates have dropped by
        60% in the last year.
      </p>
    </mat-tab>

    <mat-tab label="Features">
      Customizable

    </mat-tab>

    <mat-tab label="Accessibility">
      <p>
        I would make the argument that I am Citi Digital's foremost expert on accessibility, and so would the
        compience team who oversees those standards in Citi. Because of this, I consult in the weekly CBOL
        deisgn reviews for new features.
      </p>
    </mat-tab>

  </mat-tab-group>

  <section>
    <h3>Application Architecture Projects</h3>
    <p>The process of optimizing a deisgn requires </p>
    <div fxLayout="row">
      <div fxFlex="50%">
        <p>
          Design is most effective as an interative process that applies the scientific method. Unfortunately,
          this iteration is time consuimng and costly. If the cost of an iteration out
        </p>
      </div>
      <div fxFlex="50%">
        <p>
          Design is most effective as an interative process that applies the scientific method. Unfortunately,
          this iteration is time consuimng and costly. If the cost of an iteration out
        </p>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./citi.component.scss']
})
export class CitiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
