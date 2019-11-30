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
          <source src="../../assets/intro.mp4" type="video/mp4">
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

    <mat-tab label="Documentation">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">

        <video width="400" controls alt="Citi's Common UI Component team tour">
          <source src="../../assets/docs.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          The Common UI documentation is my response to the problem of higher-order design. Previously, we
          only considered banking customers to be our users. With this documentation, we now service our higher-order
          users: the developers at Citi.
          <br><br>
          This has faciliated better testing, reduced the need for simple support questions, and a improved confidence from
          Citi devlopers and managers that they can rely on our quality while easily transfering the knowledge of our
          library API as devlopers transer between teams.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Adoption">
    <br>
    <div fxLayout="row" fxLayoutGap="32px">
      <video width="400" controls>
        <source src="../../assets/adoption.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <p>
        Not long after we launched our documentation, we began measuing it effectiveness. Not only did the total number of defects
        drop, but the time it took us to resolve them dropped. This allowed us and other feature teams to focus on value-adding activities.
        <br><br>
        As of Feburary 2019, there were 9,091 instances of our components used in citi.com, by June that increaed to 10,980;
        an increase of 21%. By September, usage increased to 11,693. This increase in adoption not only means we are successfully
        servicing our higher-order users, but that iteration speed has improved, and the user experience is more consitent across
        the disparate features on citi.com.
      </p>
    </div>
    </mat-tab>

    <mat-tab label="Processes">
    <br>
    <div fxLayout="row" fxLayoutGap="32px">
      <video width="400" controls>
        <source src="../../assets/process.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <p>
        Beyond our documentation, I have been able to implement several successful processes. Most significantly,
        our quarterly merge has allowed us to both continue enhanceing our components for new features, while
        avoiding defects to unrelated features. Teams can plan their regression testing around these mereges, and
        and still get the benefits of our enhancements.
      </p>
    </div>
    </mat-tab>

    <mat-tab label="Iteration">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls>
          <source src="../../assets/iteration.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          Automation has been a big key to our success. We have automated unit tests for our library to ensure that
          we don't introduces defects as we make changes. These tests as well as formatting rules are applied before
          every code checkin. Each checkin also links back to the underlying story. I also created automation script
          to redeploy our documentation and new versions of our library, which I converted into the NPM format.
          <br><br>
          This has faciliated a more rapid development process that has directly impacted the design iteration, both for our
          team and for feature teams.
        </p>
      </div>

    </mat-tab>

    <mat-tab label="Accessibility">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls>
          <source src="../../assets/accessibility.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          The citi.com application is too large for a full accessibility (a11y) review. Instead, my library bears the burden of
          a11y compliance. I work closly with <a href="https://www.deque.com/" taget="_blank">Deque</a> to review our library on a cadance,
          I advise teams seeking compliance, and I consult on a11y matters in our weekly design approval sessions.
          <br><br>
          I think it is fair to say that I am the foremost authority on accessibility of the web within Citi Digital, and I would like to
          pursue this passion further in grad school.
        </p>
      </div>
    </mat-tab>

  </mat-tab-group>

  <br><br>
  <hr>

  <section>
    <h3>Server-Side Rendering</h3>
    <p>
      While I want to improve my understanding of the overall design process, I'm even more interested in
      using that understanding to develop a design architecture. This should be as tightly integrated to the
      application as the features themselves. For one to execute sucah a vision, one must have application
      the architecture skills to implement it.
    </p>
    <p>
      My team falls under the "enable" domain along with the container team which manages the application
      shell through which the citi.com application is deployed. Because we share the same boss, every fulltime
      employee on that team once once on my team, and because I am considered to be the foremost subject
      matter expert for our frontend technology, I have been affored to create a brand new container to
      support <a href="https://www.youtube.com/watch?v=GQzn7XRdzxY" target="_blank">server-side rendering (SSR)</a>.
      To do so, I have been given about 10 developers to create the container, ensure the Common UI library is
      fully SSR compatible, and faciliate the migration plan.
    </p>
    <p>
       As I write this, I'm finding it difficult to concisly
      convey the complexity and demonstrate my knowledge of application architecture, but the fact that I'm entrusted
      to create a new container for the main consumer banking website for one of the four biggest banks in Amerrica
      should convey that clearly enough.
    </p>
  </section>
  `,
  styleUrls: ['./citi.component.scss']
})
export class CitiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
