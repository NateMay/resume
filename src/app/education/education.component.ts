import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-education',
  template: `
    <hero style="background-image: url('../../assets/camogen.png');">
      <img src="../../assets/schools.jpeg" />
    </hero>
    <div class="container">
      <h1>Education</h1>

      <section>
        <div
          fxLayout="column"
          fxLayout.gt-sm="row"
          fxLayoutAlign="center center"
          fxLayoutGap="32px"
        >
          <img class="school" src="../../assets/schools/michigan.png" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Degree</td>
                <td>Masters</td>
              </tr>
              <tr>
                <td class="td_label">School</td>
                <td>University of Michigan</td>
              </tr>
              <tr>
                <td class="td_label">Field</td>
                <td>
                  <a
                    href="https://www.si.umich.edu/programs/master-science-information"
                    >Science in Information</a
                  >
                </td>
              </tr>
              <tr>
                <td class="td_label">GPA</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>August 2020 - May 2022 (expected)</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
          Nate is currently completing the curriculum for 3 tracks within the
          MSI program: 
          <a
            href="https://www.si.umich.edu/programs/master-science-information/curriculum/ux-research-and-design"
            target="_blank"
            >UX Research and Design</a
          >, 
          <a
            href="https://www.si.umich.edu/programs/master-science-information/curriculum/user-centered-agile-development"
            target="_blank"
            >User-Centered Agile Development</a
          >, and
          <a
            href="https://www.si.umich.edu/programs/master-science-information/curriculum/big-data-analytics"
            target="_blank"
            >Big Data Analytics</a
          >. A web developer by trade, Nate expects the UX curriculum to
          complement his existing technical skills. The Big Data Analytics track
          will expand his capabilities as a full stack developer and enable him
          with statistical modeling, machine learning, and the python language
          more broadly. Currently, he plans to choose User-Centered Agile
          Development as his area of focus to reflect his deeper skillset.
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
          <img class="school" src="../../assets/schools/illinois.jpg" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Degree</td>
                <td>Undergraduate</td>
              </tr>
              <tr>
                <td class="td_label">School</td>
                <td>University of Illinois</td>
              </tr>
              <tr>
                <td class="td_label">Majors</td>
                <td>Accounting, Finance</td>
              </tr>
              <tr>
                <td class="td_label">Minors</td>
                <td>Informatics, Technology & Management</td>
              </tr>
              <tr>
                <td class="td_label">GPA</td>
                <td>3.75</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>August 2010 - May 2014</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
          Originally, Nate majored in Finance with a minor in Computer Science
          (CS) to pursue algorithmic trading. Impressed by the Accounting
          program, he decided to complete a few extra classes for the Accounting
          degree as well. The engineering department made it difficult to enroll
          in classes as a minor so Nate was forced to convert his CS minor into
          informatics in his final semester. In his Sophomore year, Nate was
          admitted into the
          <a href="https://techmgmt.illinois.edu/" target="_blank"
            >Hoeft Technology and Management</a
          >
          minor which selects 25 business and 25 engineering students to both
          cross-train in the other’s curriculum and collaborate in
          interdisciplinary courses.
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
          <img class="school" src="../../assets/schools/rochester.png" />
          <table class="overview">
            <body>
              <tr>
                <td class="td_label">Degree</td>
                <td>High School</td>
              </tr>
              <tr>
                <td class="td_label">School</td>
                <td>Rochester High School</td>
              </tr>
              <tr>
                <td class="td_label">Graducated</td>
                <td>2005</td>
              </tr>
            </body>
          </table>
        </div>
        <p>
        Nate wrestled and played baseball in high school. 
        </p>
      </section>
    </div>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
