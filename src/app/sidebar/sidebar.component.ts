import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="meta-nate-a">
      <img class="glamour-shot" src="../../assets/glamour.jpeg" />
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
    <div class="links" fxLayout="row" fxLayoutAlign="space-between center">
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
    <div fxLayout="row">
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
    <br>
    
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

    <br /><br />
    <h2>Programming Portfolio</h2>

    <button
      routerLink="/cutcal"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>CutCal <small> JavaScript</small></h3>
    </button>
    <button
      routerLink="/time-picker"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Timepicker <small>JavaScript</small></h3>
    </button>

    <button
      routerLink="/food-review"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>Food Review <small>Python</small></h3>
    </button>

    <br /><br />
    <h2>Design Portfolio</h2>

    <button
      routerLink="/diet-stats"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>DietStats</h3>
    </button>

    <button
      routerLink="/fcab"
      routerLinkActive="active-link"
      (click)="close.emit()"
    >
      <h3>FCAB</h3>
    </button>

    <br />
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() close = new EventEmitter<void>()
  get isMobile() {
    return window.innerWidth < 600
  }
}
