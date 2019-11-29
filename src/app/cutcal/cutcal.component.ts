import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `

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
      <br><br>
      To do so, CutCal leverages 273 nutrition data points from the USDA's <a href="https://fdc.nal.usda.gov/" target="_blank">Food Composition Database</a>
    </p>
  </section>

  <section fxLayout="row">



      <mat-card class="example-card" fxFlex="400px">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>CutCal</mat-card-title>
          <mat-card-subtitle>Meal Planner / Nutrition Aggregator</mat-card-subtitle>
        </mat-card-header>

        <video width="400" controls mat-card-image alt="CutCal - Meal Planner, Nnutrition Aggregator">
          <source src="mov_bbb.mp4" type="video/mp4">
          <source src="mov_bbb.ogg" type="video/ogg">
          Your browser does not support HTML5 video.
        </video>
        <mat-card-content>
          <button mat-raised-button color="primary">Visit CutCal</button>
          <p class="no-first-letter">
            I created CutCal single-handedly but it is still a work in progress.
            I've nearly completed the foundation of the data architecture.
            Implementing a design architecture is my next major hurdle.
            </p>
        </mat-card-content>
      </mat-card>

      <div fxFlex="calc(100% - 400px)">
        <h3>Features of CutCal:</h3>
        <mat-list>
          <mat-list-item>
            <mat-icon  style="color:green">check</mat-icon>&nbsp;
            237 nutrition data points from the USDA Food Composition Database
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
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          Inspired by Google Calendar
          Drag and Drop
          DrillDown: Year, month, day, meal, recipe, food
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Analytics">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
        Analyze page
        Inspect nutrient
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Custom Recipes">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          minimize data entry
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Higher-Order Design">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          Admin tab
          automated testing
        </p>
      </div>
    </mat-tab>

    <mat-tab label="Planned Features">
      <br>
      <div fxLayout="row" fxLayoutGap="32px">
        <video width="400" controls alt="CutCal's calendar interface">
          <source src="" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <p>
          Advanced search
          grocery list
          pantry inventory
          chat - virtual nutrition advisors
          Gamification
        </p>
      </div>

    </mat-tab>

  </mat-tab-group>

  <br><br>

  <h2>Existing Alternatives</h2>

  <mat-accordion>

    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>MyFitnessPal by Under Aromour</mat-panel-title>
        <mat-panel-description>Meal Diary</mat-panel-description>
      </mat-expansion-panel-header>

      <div fxLayout="row">

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
  `,
  styleUrls: ['./cutcal.component.scss']
})
export class CutcalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
