import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    template: `
    <img class="hero" src="../../assets/university.jpg" />
    <div class="container">
      <h1>Education</h1>

      <section>
        <div
          class="flexible-section"
        >
          <img class="school" src="../../assets/schools/michigan.png" />
          <table class="overview spacer">
            <tbody>
              <tr>
                <td class="td_label">Degree</td>
                <td>Masters</td>
              </tr>
              <tr>
                <td class="td_label">School</td>
                <td>University of Michigan</td>
              </tr>
              <tr>
                <td class="td_label">Primary Field</td>
                <td>
                  <a
                    href="https://www.si.umich.edu/programs/master-science-information"
                    >Master of Science in Information (MSI)</a
                  >
                </td>
              </tr>
              <tr>
                <td class="td_label">Secondary Field</td>
                <td>
                  <a href="https://cfe.umich.edu/certificate/"
                    >Graduate Certificate in Innovation & Entrepreneurship</a
                  >
                </td>
              </tr>
              <tr>
                <td class="td_label">GPA</td>
                <td>4.0</td>
              </tr>
              <tr>
                <td class="td_label">Dates</td>
                <td>August 2020 - May 2022</td>
              </tr>
            </tbody>
          </table>

        </div>
        <p>
          Nate completed the curriculum for 2 tracks within the MSI program:
          <a
            href="https://www.si.umich.edu/programs/master-science-information/curriculum/ux-research-and-design"
            target="_blank"
            >UX Research and Design</a
          >
          and
          <a
            href="https://www.si.umich.edu/programs/master-science-information/curriculum/user-centered-agile-development"
            target="_blank"
            >User-Centered Agile Development (UCAD)</a
          >
          completing his capstone mastery course in UX Research and Design,
          while earning a what is effectively a graduate-level minor in
          Entrepreneurship out of the engineering school.
        </p>
        <p>
          Through his Entrepreneurship courses, Nate has developed his ability
          to understand <em>WHY</em> and <em>FOR WHOM</em> solution are needed,
          as well as <em>WHICH</em> solutions are worth pursuing. Through his
          Design courses he learned the process for discoving <em>WHAT</em> can
          be created to solve such problems. Finally, the UCAD courses he took helped
          him round out his development skills to address <em>HOW</em> to create such
          solutions.
        </p>
      </section>
      <br />
      <section>
        <div
          class="flexible-section"
        >
          <img class="school" src="../../assets/schools/illinois.jpg" />
          <table class="overview spacer">
            <tbody>
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
            </tbody>
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
      <br />
      <section>
        <div
          class="flexible-section"
        >
          <img class="school" src="../../assets/schools/rochester.png" />
          <table class="overview spacer">
            <tbody>
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
            </tbody>
          </table>

        </div>
        <p>Nate wrestled and played baseball in high school.</p>
      </section>
    </div>
  `,
    styleUrls: ['./education.component.scss'],
    standalone: false
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
