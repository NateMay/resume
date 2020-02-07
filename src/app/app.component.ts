import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

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
      <h1>Nate May</h1>
      <span class="spacer"></span>

      <button mat-icon-button
        color="primary"
        aria-label="menu"
        routerLink="/home">
        <mat-icon>home</mat-icon>
      </button>
    </mat-toolbar>

    <mat-drawer-container>


      <mat-drawer #drawer mode="side" [opened]="opened">

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

  opened = true;

  @ViewChild(MatDrawer) drawer: MatDrawer;

  constructor(private router: Router) {
    this.opened = window.innerWidth > 600;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.innerWidth < 600) {
        this.drawer.close();
      }
    });
  }

}
