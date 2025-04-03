import { Component, ViewChild } from '@angular/core'
import { MatDrawer } from '@angular/material/sidenav'
import { NavigationEnd, Router } from '@angular/router'

@Component({
    selector: 'app-resume-layout',
    template: `
    <mat-drawer-container [hasBackdrop]="isMobile">
      <mat-drawer #drawer mode="side" [opened]="opened">
        <app-sidebar (close)="isMobile ? drawer.toggle() : null"></app-sidebar>
      </mat-drawer>

      <mat-drawer-content>
        <mat-toolbar role="nav" *ngIf="isMobile">
          <a mat-icon-button aria-label="menu" (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
          </a>

          <span class="spacer"></span>

          <a mat-icon-button aria-label="menu" routerLink="/home">
            <mat-icon>home</mat-icon>
          </a>
        </mat-toolbar>
        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
    styleUrls: ['./resume-layout.component.scss'],
    standalone: false
})
export class ResumeLayoutComponent {
  opened = true

  @ViewChild(MatDrawer) drawer: MatDrawer

  get isMobile() {
    return window.innerWidth < 600
  }

  constructor(private router: Router) {
    this.opened = window.innerWidth > 600

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && window.innerWidth < 600) {
        this.drawer.close()
      }
    })
  }
}
