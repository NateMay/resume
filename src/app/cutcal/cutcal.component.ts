import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `
  <div fxLayout="row">
    <img src="../../assets/cutcal.png" style="height: 50px; width: 50px">
    &nbsp;&nbsp;&nbsp;
    <h2> CutCal</h2>
  </div>
  
  <p>Meal Calendar, Nutrition Aggregator</p>
  <section fxLayout="column">
    <h2>Inspiration for CutCal</h2>
    <p>
      As a society, we recognize the health benefits of a good diet, but we don't have a sound understanding
      of what comprises a quality diet. We iterate through diets like Paleo, Atkins, and Keto that
      characterize foods as eithergood or bad. This does not align with the contemporary paradigm from
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

  <section fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">

      <mat-card class="example-card" fxFlex.gt-sm="400px">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>CutCal</mat-card-title>
          <mat-card-subtitle>Meal Planner / Nutrition Aggregator</mat-card-subtitle>
        </mat-card-header>

        <video width="400" controls mat-card-image alt="CutCal - Meal Planner, Nnutrition Aggregator">
          <source src="../../assets/cc-intro.mov" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
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
            <mat-icon  style="color:green">check</mat-icon>
            <span>
            237 nutrition data points from the USDA <a href="https://fdc.nal.usda.gov/" target="_blank"> Food Composition Database</a>
            </span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Drag and Drop Data Entry
          </mat-list-item>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Custom Recipe Creation for Reuse
          </mat-list-item>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Calendar Interface like Google Calendar
          </mat-list-item>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Multi-Level Nutrition Aggregation
          </mat-list-item>
          <mat-list-item>
          <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Robust Data Visualization and Inspection Tools
          </mat-list-item>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            Generates Grocery List & Compiles Home Inventory
          </mat-list-item>
        </mat-list>
      </div>

  </section>

  <mat-tab-group>

    <mat-tab label="The Calendar">
      <br>
      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="../../assets/cc-calendar.mov" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          I have a lot of friends who have, at one point or another, tried to find a utility like CutCall to
          help them keep track of their diet. They all stopped be because it was too difficult and time consuming
          to enter their meal information.
          <br><br>
          The primary value propotision of CutCal is the drag and drop interface into a calendar inspired by
          google calendar. While there is a lot of room for improvement, I think this architecture serves well
          to light the data entry load for users.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Analytics">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's analyitics">
          <source src="../../assets/analytics.mov" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          Entering data is only half of the solution. The other helf is to provide insights to help users
          interpret and improve their diet.
          <br><br>
          My biggest challenge so far has been to create the data structures which enable nutrition aggregation at the
          day, meal, recipe, and ingredient level. This also faciliates features which enable users to dig into their diet,
          determine problematic patterns and make adjustments. The analytics aspect of CutCal may be my biggest design
          challenge.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Foundations">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's foundations">
          <source src="../../assets/cc-architecture.mov" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          As a team lead and application architect at Citi, I have been able to observe what is required to create
          and maintain an enterprise application. I have a huge amount of foundation beneath CutCal already including
          automated testing, internal documentation, test environements, Server side rendering, Service workers, web sockets,
          the whole nine yards.
          <br><br>
          One I round out the features themeselves and implement a design system and architecture, CutCal will be more than
          a minimum viable product, it will be a minimum viable business.
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Planned Features">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's planned features">
          <source src="../../assets/cc-planned.mov" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
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
    Novel attempts have been made to interface people with granual dietary imformation, but these fall short because of design.
    Data entry is cumbersome, insight discovery is poor, and in some cases, the UI is just plain bad. CutCal relies on the 
    assumption that if such burdens are minimized and the benefits are optimized, then more people will be willing to interface
    with such a tool to garner insights into their nutrition.
  </p>

  <br><br>

  <mat-accordion>

    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>MyFitnessPal by Under Aromour</mat-panel-title>
        <mat-panel-description>Meal Diary</mat-panel-description>
      </mat-expansion-panel-header>

      <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">

        <mat-card class="example-card" fxFlex="400px">
          <mat-card-header>
            <div mat-card-avatar class="under-armour"></div>
            <mat-card-title>MyFitnessPal</mat-card-title>
            <mat-card-subtitle>Meal Diary</mat-card-subtitle>
          </mat-card-header>

          <video width="400" controls mat-card-image alt="CutCal - Meal Planner, Nnutrition Aggregator">
            <source src="../../assets/myfitnesspal.mov" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>

          <mat-card-content>
            <p class="no-first-letter">
              I've been building CutCal in my free time.
            </p>
          </mat-card-content>
        </mat-card>

        <div fxFlex="calc(100% - 400px)">
          <p>
            CutCal seeks to 
          </p>
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>&nbsp;
              Contemporary User Interface
            </mat-list-item>
          </mat-list>
        </div>

      </div>

    </mat-expansion-panel>



    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>MyFoodDiary</mat-panel-title>
        <mat-panel-description>Nutrition Tracker</mat-panel-description>
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
              I've been building CutCal in my free time.
            </p>
          </mat-card-content>
        </mat-card>

        <div fxFlex="calc(100% - 400px)">
          <p>
            CutCal seeks to 
          </p>
          <mat-list>
            <mat-list-item>
              <mat-icon style="color:red">close</mat-icon>&nbsp;
              Contemporary User Interface
            </mat-list-item>
          </mat-list>
        </div>

      </div>

    </mat-expansion-panel>

  </mat-accordion>
  <br><br>
  `,
  styleUrls: ['./cutcal.component.scss']
})
export class CutcalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
