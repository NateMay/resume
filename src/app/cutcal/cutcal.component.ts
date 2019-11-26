import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutcal',
  template: `

  <section fxLayout="column">
    <h2>Inspiration for CutCal</h2>
    <p>
      Unhealthy diet contributes to approximately <b><a href="https://cspinet.org/eating-healthy/why-good-nutrition-important" target="_blank">678,000 deaths</a></b>
      each year in the U.S. Everyone aknowledges this, but it's not clear what we can do about it. Diets like Keto, Atkins, & Paleo came
      and went; so did the food pyramid. Each of these, though based on good principals, is an oversimplification.
      <br><br>
      Instead, nutritionist offer upper limits and daily minimums. There is no such thing as a good food or bad food, only insufficient intake of nutrients and excess.
      The trouble is, granular nutrition information is difficult to collect, aggregate, and comprehend. Novel attempts (see below) to make a tool for this have been made, but come up
      short because data entry remains cumbersome and don't yield valuable insights.
      <br><br>
      CutCal seeks to simplify data entry through a drag and drop calendar interface.
      273 nutrition data points from the <a href="https://fdc.nal.usda.gov/" target="_blank">USDA</a> are aggregated at multiple levels: food, recipe, meal, and day.
      Data Visualizations allow users to understand an investigate their food choices, enabling them leverage quality data as they pursue a healthy diet.
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

  <section fxLayout="column">
    <h2>CutCal and Design</h2>
    <p>asdasdasd</p>
  </section>

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
            <mat-list-item>
              <mat-icon>check</mat-icon>&nbsp;
              Certified for <a href="https://www.w3.org/TR/WCAG20/"> WCAG 2.0 AA</a> &nbsp;accessibility complience 
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
