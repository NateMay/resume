import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-work-experience',
  template: `
    <hero>
      <!-- <img src="../../assets/work/all-work.png" /> -->
    </hero>
    <div class="container">
      <h1>Work Experience</h1>

      <section>
        <div
          fxLayout="column"
          fxLayout.gt-sm="row"
          fxLayoutAlign="center center"
          fxLayoutGap="32px"
        >
          <img class="employer" src="../../assets/work/citi.jpg" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Employer</td>
                <td>Citi / Tata Consulting</td>
              </tr>
              <tr>
                <td class="td_label">Job Title</td>
                <td>Vice President / Consultant</td>
              </tr>
              <tr>
                <td class="td_label">Location</td>
                <td>Texas, Dallas</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>July 2017 - July 2020</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
          Nate was hired by Tata Consulting as a web developer contracted to
          Citi on their Common UI Components team. After 5 months he assumed the
          developer lead role and was hired into Citi full time in the position
          at the end of his first year. As dev lead for the common UI team, Nate
          was responsible for implementing Citi’s design system for the web
          channel including documentation and several JavaScript UI libraries.
          Eventually, Nate was tasked with spearheading 2 initiatives. The first
          of which was to implement “micro-frontends”, a solution to isolate
          frontend features for deployment. The second was to implement
          Server-side rendering (SSR) to improve our initial load time, search
          engine optimization (SEO), and facilitate other initiatives.
        </p>
        
        <button mat-button color="primary" routerLink="/citi">More about my work at Citi...</button>
        
      </section>
      <section fxLayoutAlign="center center">
        <iframe
          height="300px"
          width="500px"
          src="https://www.youtube.com/embed/1Fe5Rou9Ng4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <br>
      <section>
        <div
          fxLayout="column"
          fxLayout.gt-sm="row"
          fxLayoutAlign="center center"
          fxLayoutGap="32px"
        >
          <img class="employer" src="../../assets/work/fti.jpeg" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Employer</td>
                <td>FTI Consulting</td>
              </tr>
              <tr>
                <td class="td_label">Job Title</td>
                <td>Consultant</td>
              </tr>
              <tr>
                <td class="td_label">Location</td>
                <td>Illinois, Chicago</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>July 2014 - November 2016</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
          Straight from undergrad, Nate joined FTI’s Financial Enterprise and
          Data Analytics unit. We specialized in big data analysis, generally
          for litigation. At any time, Nate would work on several projects using
          SQL and other database technologies, python, and other big-data
          technologies to generate quantitative, juror-friendly reports and
          expert testimonies. Nate’s Biggest project was related to the Bernie
          Maddoff scandal and his most notable contribution was to create a
          database and web-based UI for data entry using Oracle/APEX.
        </p>
      </section>
      <br>
      <section>
        <div
          fxLayout="column"
          fxLayout.gt-sm="row"
          fxLayoutAlign="center center"
          fxLayoutGap="32px"
        >
          <img class="employer" src="../../assets/work/deloitte.jpg" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Employer</td>
                <td>Deloitte Consulting</td>
              </tr>
              <tr>
                <td class="td_label">Job Title</td>
                <td>Business Technology Analyst Summer Scholar (intern)</td>
              </tr>
              <tr>
                <td class="td_label">Location</td>
                <td>Missouri, St. Louis</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>Summer 2013</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
        Nate spent the summer in St. Louis participating in a Hyperion/Essbase implementation for a massive food manufacturer. He was primarily tasked with maintaining the project management workflow and translating business requirements into technical requirements.  
        </p>
      </section>
    </div>
  `,
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
