import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `
  <div fxLayout="row" #first>
    <img src="../../assets/cutcal.png" style="height: 50px; width: 50px">
    &nbsp;&nbsp;&nbsp;
    <h2> CutCal</h2>
  </div>
  <p>Meal Calendar, Nutrition Aggregator</p>
  <a mat-raised-button color="primary" href="https://cutcal.com/calendar/month/(dmy:28-1-2020)" target="_blank">Visit CutCal</a>
  <section fxLayout="column">
    <h2>Inspiration for CutCal</h2>
    <p>
      As a society, we recognize the health benefits of a good diet, but we don't have a sound understanding
      of what comprises a quality diet. We iterate through diets like Paleo, Atkins, and Keto that
      characterize foods as either good or bad. This does not align with the contemporary paradigm from
      the nutrition sciences which emphasises the insufficiencies and excess of individual nutrients in
      one’s diet.
      <br><br>
      Why do we turn to these fad diets? Because they are “solutions” simple enough for us
      to interface with. We have no current means of aggregating the granular data underlying our diets,
      so we simplify.
      <br><br>
      The mission of CutCal is to simplify the process of entering consumption data, organize it usefully,
      provide comprehensible insights, facilitate discovery, and all in all, empower people to better
      <span class="tip" matTooltip="Design is the process of optimizing the interface between a person and a solution or information">interface</span>
      with the otherwise elusive solutions from the nutrition sciences.
    </p>
  </section>

  <section fxLayout="column" fxLayout.gt-md="row" fxLayoutGap="32px">

      <mat-card class="example-card" fxFlex.gt-sm="550px">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>CutCal</mat-card-title>
          <mat-card-subtitle>Meal Planner / Nutrition Aggregator</mat-card-subtitle>
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
          <a mat-raised-button color="primary" href="https://cutcal.com/calendar/month/(dmy:28-1-2020)" target="_blank">Visit CutCal</a>
          <p class="no-first-letter">
            I created CutCal single-handedly but it is still a work in progress.
            I've nearly completed the foundation of the data architecture.
            Implementing a design architecture is my next major hurdle.
            </p>
        </mat-card-content>
      </mat-card>

      <div fxFlex>
        <h3>Features of CutCal:</h3>
        <mat-list>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>
            237 nutrition data points from the USDA <a href="https://fdc.nal.usda.gov/" target="_blank"> Food Composition Database</a>
            </span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>Drag and Drop Data Entry</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>Custom Recipe Creation for Reuse</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>Calendar Interface like Google Calendar</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>Multi-Level Nutrition Aggregation</span>
          </mat-list-item>
          <mat-list-item>
          <mat-icon style="color:green">check</mat-icon>
            <span>Robust Data Visualization and Inspection Tools</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
            <span>Generates Grocery List & Compiles Home Inventory</span>
          </mat-list-item>
        </mat-list>
      </div>

  </section>

  <mat-tab-group>

    <mat-tab label="The Calendar">
      <br>
      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px" style="min-height:256px">
        <iframe
          fxFlex="100"
          fxFlex.gt-sm="40"
          src="https://www.youtube.com/embed/GURutMXvAjE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p fxFlex>
          I have a lot of friends who have, at one point or another, tried to find a utility like CutCall to
          help them keep track of their diet. They all stopped because it was too difficult and time consuming
          to enter their meal information.
          <br><br>
          The primary value proposition of CutCal is the drag and drop interface into a calendar inspired by
          google calendar. While there is a lot of room for improvement, I think this architecture serves well
          to light the data entry load for users.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Analytics">
      <br>
      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px" style="min-height:256px">
        <iframe
          fxFlex="100"
          fxFlex.gt-sm="40"
          src="https://www.youtube.com/embed/nbWhG-h4wH4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p fxFlex>
          Entering data is only half of the solution. The other half is to provide insights to help users
          interpret and improve their diet.
          <br><br>
          My biggest challenge so far has been to create the data structures which enable nutrition aggregation at the
          day, meal, recipe, and ingredient level. This also facilitates features which enable users to dig into their diet,
          determine problematic patterns and make adjustments. The analytics aspect of CutCal may be my biggest design
          challenge.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Foundations">
      <br>
      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px" style="min-height:256px">

        <iframe
          fxFlex="100"
          fxFlex.gt-sm="40"
          src="https://www.youtube.com/embed/tWkaRtCQhLk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p fxFlex>
          As a team lead and application architect at Citi, I have been able to observe what is required to create
          and maintain an enterprise application. I have a huge amount of foundation beneath CutCal already including
          automated testing, internal documentation, test environments, Server side rendering, Service workers, web sockets,
          the whole nine yards.
          <br><br>
          One I round out the themselves themeselves and implement a design system and architecture, CutCal will be more than
          a minimum viable product, it will be a minimum viable business.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Planned Features">
      <br>
      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px" style="min-height:256px">
        <iframe
          fxFlex="100"
          fxFlex.gt-sm="40"
          src="https://www.youtube.com/embed/OBzvheYtY4E"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p fxFlex>
          I'll be the first to admit that my UI needs work. That is what made me first consider design school. Intuitively,
          I'm confident of certain features like advanced searching, grocery lists, profile pages, etc. There are a lot of
          features that I am holding off from creating until I can be confident that they are what users want, and I understand
          how to design those features in a way that they can interact with efficiently.
        </p>
      </div>

    </mat-tab>

  </mat-tab-group>

  <br><br><br><br>

  <h2>Other Attempts to Solve the Same Problem</h2>

  <p>
    Novel attempts have been made to interface people with granular dietary information, but these fall short because of design.
    Data entry is cumbersome, insight discovery is poor, and in some cases, the UI is just plain bad. CutCal relies on the
    assumption that if such burdens are minimized and the benefits are optimized, then more people will be willing to interface
    with such a tool to garner insights into their nutrition.
  </p>

  <br><br>

  <mat-accordion>

    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>MyFitnessPal by Under Aromour</mat-panel-title>
      </mat-expansion-panel-header>

      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">

        <mat-card class="example-card" fxFlex="400px">
          <mat-card-header>
            <div mat-card-avatar class="under-armour"></div>
            <mat-card-title>MyFitnessPal</mat-card-title>
            <mat-card-subtitle>Meal Diary</mat-card-subtitle>
          </mat-card-header>

          <iframe
            mat-card-image
            width="400"
            height="260"
            src="https://www.youtube.com/embed/fu9RKqlmD1Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <mat-card-content>
            <p class="no-first-letter">
            MyFitnessPal is the most successful competitor in the space
            </p>
          </mat-card-content>
        </mat-card>

        <div fxFlex="calc(100% - 400px)">
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Only ~20 nutrition data points</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Drag and Drop Data Entry</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span>Custom Recipe Creation for Reuse</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Calendar Interface like Google Calendar</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Multi-Level Nutrition Aggregation</span>
            </mat-list-item>
            <mat-list-item>
            <mat-icon style="color:red">close</mat-icon>
              <span>Robust Data Visualization and Inspection Tools</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Generates Grocery List & Compiles Home Inventory</span>
            </mat-list-item>
          </mat-list>
        </div>

      </div>

    </mat-expansion-panel>



    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>MyFoodDiary</mat-panel-title>
      </mat-expansion-panel-header>

      <div fxLayout="row">

        <mat-card class="example-card" fxFlex="400px">
          <mat-card-header>
            <div mat-card-avatar class="under-armour"></div>
            <mat-card-title>MyFoodDiary</mat-card-title>
            <mat-card-subtitle>Nutrition Tracker</mat-card-subtitle>
          </mat-card-header>

          <iframe src="https://player.vimeo.com/video/198867954"
            mat-card-image
            width="640"
            height="240"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>

          <mat-card-content>
            <p class="no-first-letter">
              MyFoodDiary has the best UX and features in this space
            </p>
          </mat-card-content>
        </mat-card>

        <div fxFlex="calc(100% - 400px)">
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Only ~30 nutrition data points</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Drag and Drop Data Entry</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:green">check</mat-icon>
              <span>Custom Recipe Creation for Reuse</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Calendar Interface like Google Calendar</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Multi-Level Nutrition Aggregation</span>
            </mat-list-item>
            <mat-list-item>
            <mat-icon style="color:green">check</mat-icon>
              <span>Robust Data Visualization and Inspection Tools</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Generates Grocery List & Compiles Home Inventory</span>
            </mat-list-item>
          </mat-list>
        </div>

      </div>

    </mat-expansion-panel>

    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>Lifesum</mat-panel-title>
      </mat-expansion-panel-header>

      <div fxLayout="row">

        <mat-card class="example-card" fxFlex="400px">
          <mat-card-header>
            <div mat-card-avatar class="under-armour"></div>
            <mat-card-title>Lifesum</mat-card-title>
            <mat-card-subtitle>Diet Planner</mat-card-subtitle>
          </mat-card-header>

          <iframe
            mat-card-image
            width="400"
            height="260"
            src="https://www.youtube.com/embed/QDZJjKWD5V8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <mat-card-content>
            <p class="no-first-letter">
            Lifesum provides more receipes than alternatives, but is mobile only and provides
            minimal data insights.
            </p>
          </mat-card-content>
        </mat-card>

        <div fxFlex="calc(100% - 400px)">
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Only ~15 nutrition data points</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Drag and Drop Data Entry</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Custom Recipe Creation for Reuse</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Calendar Interface like Google Calendar</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Multi-Level Nutrition Aggregation</span>
            </mat-list-item>
            <mat-list-item>
            <mat-icon style="color:red">close</mat-icon>
              <span>Robust Data Visualization and Inspection Tools</span>
            </mat-list-item>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>
              <span>Generates Grocery List & Compiles Home Inventory</span>
            </mat-list-item>
          </mat-list>
        </div>

      </div>

    </mat-expansion-panel>

  </mat-accordion>
  <button mat-raised-button
    color="primary"
    class="next-section"
    routerLink="/time-picker"
    >
    Time Picker<mat-icon>chevron_right</mat-icon>
  </button>
  `,
  styleUrls: ['./cutcal.component.scss']
})
export class CutcalComponent implements OnInit {

  @ViewChild('first', { static: true }) first: ElementRef;

  ngOnInit() {
    this.first.nativeElement.scrollIntoView();
  }

}
