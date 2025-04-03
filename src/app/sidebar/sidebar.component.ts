import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-sidebar',
    template: `
    <div class="meta-nate-a">
      <img class="glamour-shot" src="../../assets/headshot.jpg" />
      <span class="names">
        <p class="p1">Nate</p>
        <p class="p2">May</p>
      </span>
      <button
        *ngIf="isMobile"
        mat-icon-button
        aria-label="toggle sidenav"
        (click)="close.emit()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <div class="links">
      <a
        class="link"
        href="https://www.linkedin.com/in/nathaniel-may-9b1b53b/"
        target="_blank"
        matTooltip="LinkedIn"
      >
        <mat-icon svgIcon="linkedin" style="color:#fff"></mat-icon>
      </a>
      <a
        class="link"
        href="https://github.com/NateMay"
        target="_blank"
        matTooltip="GitHub"
      >
        <mat-icon svgIcon="github" style="color:#fff"></mat-icon>
      </a>
      <a
        class="link"
        href="https://www.youtube.com/channel/UCqgyvVH5vXium-_twH2jlOA"
        target="_blank"
        matTooltip="YouTube"
      >
        <mat-icon svgIcon="youtube" style="color:#fff"></mat-icon>
      </a>
      <a
        class="link"
        href="https://stackoverflow.com/users/10235442/nate-may?tab=profile"
        target="_blank"
        matTooltip="StackOverflow"
      >
        <mat-icon svgIcon="stackoverflow" style="color:#fff"></mat-icon>
      </a>
    </div>
    <div class="inline-row">
      <button
        routerLink="home"
        routerLinkActive="active-link"
        (click)="close.emit()"
      >
        <h3>Resume</h3>
      </button>

      <button
        routerLink="about-me"
        routerLinkActive="active-link"
        (click)="close.emit()"
      >
        <h3>About Me</h3>
      </button>
    </div>
    <br />

    <h2>Background</h2>
    <button
      routerLink="/education"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Education</h3>
    </button>
    <button
      routerLink="/work"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Work Experience</h3>
    </button>
    <button
      routerLink="/military"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Military Service</h3>
    </button>
    <!-- <button routerLink="/about-me" routerLinkActive="active-link" (click)="close.emit()">
      <h3>About Nate</h3>
    </button> -->

    <br />
    <h2>Personal Project</h2>

    <button
      routerLink="/overview"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Project Overview</h3>
    </button>

    <button
      routerLink="/cutcal"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>CutCal (old) <small> Angular</small></h3>
    </button>
    <button
      routerLink="/diet-stats"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Redesign <small> Figma</small></h3>
    </button>

    <!-- <button
      routerLink="/food-review"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Food Review <small>Django</small></h3>
    </button> -->
    <!-- <a
      href="https://dietstats.web.app/calendar/month"
      target="_blank"
    >
      <h3>DietStats (newest)<small> Angular</small></h3>
    </a> -->
    <a
      href="https://drive.google.com/file/d/1QiCToMjNkN54w4NrCn-gN6fT3W62i33W/view?usp=sharing"
      target="_blank"
    >
      <h3>DietStats (newest)<small> Angular</small></h3>
    </a>

    <br />
    <h2>Other Projects</h2>

    <button
      routerLink="/time-picker"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Timepicker</h3>
    </button>

    <button
      routerLink="/fcab"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>FCAB</h3>
    </button>
    <!-- <button
      routerLink="/chipotle"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Chipotle Nutrition</h3>
    </button> -->
    <a href="https://chipotle-nutrition-analyzer.web.app/" target="_blank">
      <h3>Chipotle Nutrition</h3>
    </a>
    <a href="https://natemay.github.io/red-lake/index.html" target="_blank">
      <h3>Red Lakes Visualizations</h3>
    </a>

    <br />
    <br />
  `,
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
  @Output() close = new EventEmitter<void>()
  get isMobile() {
    return window.innerWidth < 600
  }
}
