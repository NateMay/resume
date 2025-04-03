import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fcab',
    template: `
    <img class="hero" src="../../assets/fcab/desktop_slant_hero.png" />
    <h1>FCAB</h1>
    <h2>Foundation for Charitable Giving in Bangladesh</h2>
    <br />
    <section class="container">
      <p>
        <a
          href="https://www.si.umich.edu/programs/engaged-learning/design-and-innovation"
          target="_blank"
          >Design Clinic</a
        >
        is a student organization. Our project was
        <a href="https://www.fcabd.org/" target="_blank">FCAB</a>, a non-profit
        conducting research and volunteer work in Bangladesh. They asked us to
        redesign their website citing their desire to update the aesthetic and a
        wish list of features.
      </p>
      <br />
      <h3>Framing the Problem</h3>
      <br />
      <table class="overview">
        <thead>
          <tr>
            <th>Who is affected?</th>
            <th>What is the problem?</th>
            <th>Where does it happen?</th>
            <th>Why does it matter?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Organization leaders</td>
            <td>Difficult to update site content</td>
            <td>Offloaded to developers</td>
            <td>
              Organization leaders need to easily update content themselves
            </td>
          </tr>
          <tr>
            <td>Researchers & volunteers</td>
            <td>Ineffectively showcases work</td>
            <td>Hands off their publicity</td>
            <td>Affects fundraising and volunteer interest</td>
          </tr>
          <tr>
            <td>Visitors</td>
            <td>Unhelpful, Uninspiring</td>
            <td>Word of mouth, Google search</td>
            <td>Trust is adversely affected, contributions less likely</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h3>Problem Statement</h3>
      <p>
        FCAB’s website did not advertise the organization effectively, offer
        organizational utility, or provide information adequately and would have
        to do so with a minimal budget and staff.
      </p>
      <p>
        As a team we took a divide and conquer approach. I was not centrally
        involved in the competitive analysis, personas, or need finding
        interviews and I only designed one significant page in its entirety.
        Below are the areas in which I contributed most directly:
      </p>
      <br />
      <h3>Technical Assessment & Scope Realignment</h3>
      <p>
        Our client had floated a number of laufty desires for the site;
        including complex communication tools, detailed interactive metrics, and
        a custom system for content updates. Having a web development background
        I took it upon myself to determine the feasibility of these requests.
      </p>
      <p>
        After speaking with their (sole) developer, I concluded that many
        requested features were unrealistic for an organization of that size and
        funding and more than we could take on as a single-semester design team.
        My Project Manager concurred that we should pare back the scope and
        focus on a few pages that have the most impact and provide a roadmap for
        them to move forward.
      </p>
      <p>
        Also upon my recommendation the team agreed to a minimalist design
        approach to reduce the developer burden. Lastly, with the developer’s
        buy in, we selected SquareSpace (rather than a custom build) because
        their content management system put content updates within reach of the
        leadership team’s technical capabilities.
      </p>
      <br />
      <section>
        <h3>Site Map & Layout</h3>
        <div>
          <p>
            I was also tasked with thinking through the navigation and site map.
            Based on a grouping exercise, I reduced the navigation to main 3
            categories: About, Project, and Contact as well as a prominent
            Donate button (Later our client insisted that Partners be added as
            well). These main categories corresponded to the primary intentions
            discovered during the need-finding interviews. Sub-pages provided
            the visitors the ability to logically “dive into” the site and
            discover specific projects and details about the organization. I
            also determined the project filtering structure and project
            hierarchy that we chose as a team.
          </p>
          <div>
            <img class="centered-image" src="../../assets/fcab/sitemap.png" />
          </div>
        </div>
      </section>

      <br />
      <section>
        <h3>Wireframing & Prototyping</h3>
        <div>
          <div>
            <p>
              Perhaps my biggest contribution was to the wireframes and
              prototype. I championed Figma as our design tool, onboarded the
              team with education accounts, created the first draft of the
              design system and component library, and laid the groundwork for
              the page layouts.
            </p>
            <p>
              Our client insisted that we reuse the existing color palette.
              Light green and hot pink proved difficult to work with for
              sufficient color contrast and aesthetic, but I made it work.
            </p>
            <p>
              Aside from buttons and form fields, we needed to create a variety
              of content components: cards, heroes, quote blocks, image
              carousels, etc. Our need-finding interviews revealed that the
              spirit of their work was not well-communicated so the homepage,
              project pages, etc would need a smattering of content components
              to bring them to life. These components needed to be responsive
              all the way from desktop to mobile but not too complex for their
              developer to create.
            </p>
          </div>

          <img class="centered-image" src="../../assets/fcab/Palette.png" />
          <img class="centered-image" src="../../assets/fcab/typeography.png" />
        </div>
      </section>

      <br />
      <h3>Contact Page</h3>
      <p>
        The only full page that I developed was the Contact page. Knowing that
        users dislike long forms, my goal was to reduce the fields to a bare
        minimum, combining even the first and last name fields. The existing
        site had several contact forms dedicated for specific purposes. I
        combined all of these but added a “Subject” dropdown. Adding quotes and
        testimonials to this page not only gave it some life, but also provided
        context to the user for the various purposes that this single form might
        serve: general inquiry, internship opportunities, and research
        questions.
      </p>

      <img
        class="centered-image"
        src="../../assets/fcab/contact_us_desktop.png"
      />
    </section>
  `,
    styleUrls: ['./fcab.component.scss'],
    standalone: false
})
export class FcabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
