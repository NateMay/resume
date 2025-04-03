import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-citi',
    template: `
    <img class="logo" src="../../assets/work/citibank.png" />
    <br /><br /><br />

    <section>
      <h2>My Team</h2>
      <p style="min-height: 300px">
        <span class="arrow">That's me &#10549; </span>
        <img class="team" src="../../assets/team.jpg" />
        This is my team: the <b>Common UI</b> team. We manage libraries of
        reusable web components for several JavaScript frameworks and Citi
        applications. These libraries adhere to Citi's design system, which we
        call the <b>Digital Design Language</b> (DDL).
        <a href="https://online.citi.com/US/login.do/" target="_blank"
          >Citi Bank Online</a
        >&nbsp;(CBOL) is the most notable Citi application that we service,
        leveraging >10,000 instances of our components. <br /><br />
        While I was a contractor, Citi transitioned to a new frontend framework
        called
        <a href="https://angular.io/" target="_blank">Angular</a> and I was able
        to personally implement many of our components that I showcase below.
        After being hired in full time as technical lead, I have had the
        opportunity to architect an ecosystem around this, now our primary, UI
        library.
      </p>
    </section>

    <section class="column">
      <h2>My Work</h2>
      <br />
      <div class="stack-mobile">
        <mat-card class="example-card">
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>Tour of Common UI Components</mat-card-title>
            <mat-card-subtitle>Angular implementation</mat-card-subtitle>
          </mat-card-header>

          <iframe
            mat-card-image
            height="243px"
            src="https://www.youtube.com/embed/XhdzW7ZMWYk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <mat-card-content>
            <p>
              Citi's intellectual property cannot leave its private network, so
              I'll give you a video tour.
            </p>
          </mat-card-content>
        </mat-card>

        <div >
          <p>
            To keep up with the rapidly evolving
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"
              >JavaScript</a
            >
            ecosystem, achieve compliance, and facilitate Citi's development
            tempo, our team has been able to implement the following features at
            my direction.
          </p>
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span class="add-margin"
                >Adheres to Citi's Digital Design Language</span
              >
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span class="add-margin"
                >Certified for
                <a href="https://www.w3.org/TR/WCAG20/"> WCAG 2.0 AA</a>
                accessibility complience</span
              >
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span class="add-margin"
                >Compatible with
                <a
                  href="https://www.youtube.com/watch?v=GQzn7XRdzxY"
                  target="_blank"
                  >server-side rendering</a
                ></span
              >
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span class="add-margin">Robust Documentation (see video)</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span class="add-margin"
                >Packaged as an
                <a
                  href="https://www.w3schools.com/whatis/whatis_npm.asp"
                  target="_blank"
                  >NPM Library</a
                ></span
              >
            </mat-list-item>
          </mat-list>
        </div>
      </div>
    </section>

    <mat-tab-group>
      <mat-tab label="Documentation">
        <br />
        <div class="stack-mobile">
          <iframe

            src="https://www.youtube.com/embed/7kQuqhDZ7lM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p >
            The Common UI documentation is my response to the problem of
            higher-order design. Previously, we only considered banking
            customers to be our users. With this documentation, we now service
            our higher-order users: the developers at Citi.
            <br /><br />
            This has facilitated better testing, reduced the need for simple
            support questions, and improved confidence from Citi developers and
            managers that they can rely on our quality while easily transferring
            the knowledge of our library API as developers rotate roles.
          </p>
        </div>
      </mat-tab>

      <mat-tab label="Adoption">
        <br />
        <div class="stack-mobile">
          <iframe

            src="https://www.youtube.com/embed/9l0Lnd9pZnY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p >
            Not long after we launched our documentation, we began measuring it
            effectiveness. Not only did the total number of defects drop, but
            the time it took us to resolve them dropped. This allowed us and
            other feature teams to focus on value-adding activities.
            <br /><br />
            As of February 2019, there were 9,091 instances of our components
            used in citi.com, by June that increased to 10,980; an increase of
            21%. By September, usage increased to 11,693. This increase in
            adoption not only means we are successfully servicing our
            higher-order users, but that iteration speed has improved, and the
            user experience is more consistent across the disparate features on
            citi.com.
          </p>
        </div>
      </mat-tab>

      <mat-tab label="Processes">
        <br />
        <div class="stack-mobile">
          <iframe

            src="https://www.youtube.com/embed/owZZzno-uq4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p >
            Beyond our documentation, I have been able to implement several
            successful processes. Most significantly, our quarterly merge has
            allowed us to both continue enhancing our components for new
            features, while avoiding defects to unrelated features. Teams can
            plan their regression testing around these mereges, and still get
            the benefits of our enhancements.
          </p>
        </div>
      </mat-tab>

      <mat-tab label="Iteration">
        <br />
        <div class="stack-mobile">
          <iframe

            src="https://www.youtube.com/embed/hGfkAJJCx8A"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p >
            Automation has been a big key to our success. We have automated unit
            tests for our library to ensure that we don't introduces defects as
            we make changes. These tests as well as formatting rules are applied
            before every code check in. Each check in also links back to the
            underlying story. I also created automation script to redeploy our
            documentation and new versions of our library, which I converted
            into the NPM format.
            <br /><br />
            This has facilitated a more rapid development process that has
            directly impacted the design iteration, both for our team and for
            feature teams.
          </p>
        </div>
      </mat-tab>

      <mat-tab label="Accessibility">
        <br />
        <div class="stack-mobile">
          <iframe

            src="https://www.youtube.com/embed/XQvYEVP_LxU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p >
            The citi.com application is too large for a full accessibility
            (a11y) review. Instead, my library bears the burden of a11y
            compliance. I work closely with
            <a href="https://www.deque.com/" taget="_blank">Deque</a> to review
            our library on a cadence, I advise teams seeking compliance, and I
            consult on a11y matters in our weekly design approval sessions.
            <br /><br />
            I think it is fair to say that I am the foremost authority on
            accessibility of the web within Citi Digital, and I would like to
            pursue this passion further in grad school.
          </p>
        </div>
      </mat-tab>
    </mat-tab-group>

    <br /><br />
    <hr />

    <section>
      <h3>Server-Side Rendering</h3>
      <p>
        While I want to improve my understanding of the overall design process,
        I'm even more interested in using that understanding to develop a design
        architecture. This should be as tightly integrated to the application as
        the features themselves. For one to execute such a vision, one must have
        the application architecture skills to implement it.
      </p>
      <p>
        My team falls under the "enable" domain along with the container team
        which manages the application shell through which the citi.com
        application is deployed. Because we share the same boss, every full time
        employee on that team once once on my team, and because I am considered
        to be the foremost subject matter expert for our frontend technology, I
        have been afforded to create a brand new container to support
        <a href="https://www.youtube.com/watch?v=GQzn7XRdzxY" target="_blank"
          >server-side rendering (SSR)</a
        >. To do so, I have been given about 10 developers to create the
        container, ensure the Common UI library is fully SSR compatible, and
        facilitate the migration plan.
      </p>
      <p>
        As I write this, I'm finding it difficult to concisely convey the
        complexity of this undertaking and demonstrate my knowledge of
        application architecture, but the fact that I'm entrusted to create a
        new application container for one of the four biggest banks' primary
        consumer banking website should convey that clearly enough.
      </p>
    </section>
  `,
    styleUrls: ['./citi.component.scss'],
    standalone: false
})
export class CitiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
