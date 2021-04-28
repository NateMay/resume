import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-stats',
  template: `
    
    <img class="hero" src="../../assets/dietstats_design_overview.png" />
      <h1>DietStats</h1>
    
      <section fxLayout="column" fxLayout.gt-md="row" fxLayoutGap="32px" class="container">
  
        <mat-card class="example-card" fxFlex>
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>Desktop Month View</mat-card-title>
            <mat-card-subtitle>Designed in Figma</mat-card-subtitle>
          </mat-card-header>
  
          <img mat-card-image src="../../assets/Month.png">
  
          <mat-card-actions align="right">
          <a
              href="https://www.figma.com/file/Wiq12dV4ZQaoniPQDlHoSz/Prototype"
              target="_blank"
              mat-raised-button
              class="goto"
              >View the complete design in Figma</a
            >
          </mat-card-actions>
  
          <!-- <mat-card-actions align="end">
    
          </mat-card-actions> -->
        </mat-card>
  
        <div fxFlex>
          <p>
          I have had the opportunity to leverage my masters
          <a routerLink="/education">coursework at the University of Michigan</a>
          to redesign my interface for <a routerLink="/cutcal">CutCal</a>.
          This design pivot warrented a renaming. It is now called <b>DietStats</b>
          </p>
          <p>
            I'm nearing the point where I can begin to develop the app fully
            while iterating the design incrementally, but I have a few more
            issues to resolve. Until the I'll hold off on fully detailing
            my design process and experience on this project. Until then, you
            can view my progress in <a href="https://www.figma.com/file/Wiq12dV4ZQaoniPQDlHoSz/Prototype" target="_blank">Figma</a>,
            or at least look at the <a routerLink="/food-review">search</a> feature.
          </p>
  
        </div>
  
      </section>

      <br>
      <h2 style="text-align:center">Graphic design project <small>(Apr '21)</small></h2>

      <object
        data="../../assets/final.pdf"
        type="application/pdf"
      >
        <a href="../../assets/resume.pdf">test.pdf</a>
      </object>
  
      <h2 style="text-align:center">Interaction design project <small>(Nov '20)</small></h2>
  
      <section fxLayoutAlign="center center" class="container"> 
        <iframe
          height="300px"
          width="500px"
          src="https://www.youtube.com/embed/9Mt4XhvUE5I"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    
  `,
  styleUrls: ['./diet-stats.component.scss']
})
export class DietStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
