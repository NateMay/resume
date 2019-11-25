import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">

      <button mat-icon-button
        color="primary"
        aria-label="menu"
        (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>

      <span class="spacer"></span>
      <h1>Nate May - Design Portfolio</h1>
      <span class="spacer"></span>

      <button mat-button routerLink="/about-me">About Me</button>
    </mat-toolbar>

    <mat-drawer-container>


      <mat-drawer #drawer mode="side" opened>

        <app-sidebar></app-sidebar>

      </mat-drawer>


      <mat-drawer-content>

        <router-outlet></router-outlet>

      </mat-drawer-content>


    </mat-drawer-container>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
