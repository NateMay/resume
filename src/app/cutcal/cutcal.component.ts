import { Component } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `
    <img class="hero" src="../../assets/cutcual-ss.png" />

    <div class="container">
      <h1>CutCal</h1>
      <div role="doc-subtitle" class="subtitle">
        JavaScript / Angular
        <button mat-button>
          <a
            class="github-link"
            href="https://github.com/NateMay/cutcal"
            target="_blank"
            matTooltip="GitHub"
          >
            <mat-icon svgIcon="github" style="color:#576a71"></mat-icon>
          </a>
        </button>
      </div>

      <mat-card class="overview">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>CutCal</mat-card-title>
          <mat-card-subtitle
            >Meal Planner / Nutrition Aggregator</mat-card-subtitle
          >
        </mat-card-header>

        <iframe
          mat-card-image
          height="243px"
          src="https://www.youtube.com/embed/C13G6m4U7ls"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <span>
                237 nutrition data points:
                <a href="https://fdc.nal.usda.gov/" target="_blank"> USDA</a>
              </span>
            </mat-list-item>
            <mat-list-item>
              <span>Drag and Drop Data Entry</span>
            </mat-list-item>
            <mat-list-item>
              <span>Custom Recipe Creation for Reuse</span>
            </mat-list-item>
            <mat-list-item>
              <span>Calendar Interface like Google Calendar</span>
            </mat-list-item>
            <mat-list-item>
              <span>Multi-Level Nutrition Aggregation</span>
            </mat-list-item>
            <mat-list-item>
              <span>Robust Data Visualization and Inspection Tools</span>
            </mat-list-item>
            <mat-list-item>
              <span>Generates Grocery List & Compiles Home Inventory</span>
            </mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>

      <mat-tab-group class="container">
        <mat-tab label="The Calendar">
          <br />
          <div class="stack-mobile">
            <iframe
              src="https://www.youtube.com/embed/GURutMXvAjE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              I have a lot of friends who have, at one point or another, tried
              to find a utility like CutCall to help them keep track of their
              diet. They all stopped because it was too difficult and time
              consuming to enter their meal information.
              <br /><br />
              The primary value proposition of CutCal is the drag and drop
              interface into a calendar inspired by google calendar. While there
              is a lot of room for improvement, I think this architecture serves
              well to light the data entry load for users.
            </p>
          </div>
        </mat-tab>

        <mat-tab label="Analytics">
          <br />
          <div class="stack-mobile">
            <iframe
              src="https://www.youtube.com/embed/nbWhG-h4wH4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Entering data is only half of the solution. The other half is to
              provide insights to help users interpret and improve their diet.
              <br /><br />
              My biggest challenge so far has been to create the data structures
              which enable nutrition aggregation at the day, meal, recipe, and
              ingredient level. This also facilitates features which enable
              users to dig into their diet, determine problematic patterns and
              make adjustments. The analytics aspect of CutCal may be my biggest
              design challenge.
            </p>
          </div>
        </mat-tab>

        <mat-tab label="Foundations">
          <br />
          <div class="stack-mobile">
            <iframe
              src="https://www.youtube.com/embed/tWkaRtCQhLk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p>
              As a team lead and application architect at Citi, I have been able
              to observe what is required to create and maintain an enterprise
              application. I have a huge amount of foundation beneath CutCal
              already including automated testing, internal documentation, test
              environments, Server side rendering, Service workers, web sockets,
              the whole nine yards.
              <br /><br />
              One I round out the themselves themeselves and implement a design
              system and architecture, CutCal will be more than a minimum viable
              product, it will be a minimum viable business.
            </p>
          </div>
        </mat-tab>

        <mat-tab label="Planned Features">
          <br />
          <div class="stack-mobile">
            <iframe
              src="https://www.youtube.com/embed/OBzvheYtY4E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              I'll be the first to admit that my UI needs work. That is what
              made me first consider design school. Intuitively, I'm confident
              of certain features like advanced searching, grocery lists,
              profile pages, etc. There are a lot of features that I am holding
              off from creating until I can be confident that they are what
              users want, and I understand how to design those features in a way
              that they can interact with efficiently.
            </p>
          </div>
        </mat-tab>
      </mat-tab-group>

      <section class="container">
        <h2>Inspiration for CutCal</h2>
        <p>
          As a society, we recognize the health benefits of a good diet, but we
          don't have a sound understanding of what comprises a quality diet. We
          iterate through diets like Paleo, Atkins, and Keto that characterize
          foods as either good or bad. This does not align with the contemporary
          paradigm from the nutrition sciences which emphasises the
          insufficiencies and excess of individual nutrients in one’s diet.
          <br /><br />
          Why do we turn to these fad diets? Because they are “solutions” simple
          enough for us to interface with. We have no current means of
          aggregating the granular data underlying our diets, so we simplify.
          <br /><br />
          The mission of CutCal is to simplify the process of entering
          consumption data, organize it usefully, provide comprehensible
          insights, facilitate discovery, and all in all, empower people to
          better
          <span
            class="tip"
            matTooltip="Design is the process of optimizing the interface between a person and a solution or information"
            >interface</span
          >
          with the otherwise elusive solutions from the nutrition sciences.
        </p>
      </section>
    </div>
  `,
  styleUrls: ['./cutcal.component.scss']
})
export class CutcalComponent {}
