import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `


  <mat-list role="list">

    <h2>What I Believe</h2>

    <button
      routerLink="/beliefs"
      routerLinkActive="active-link"
      #rla1="routerLinkActive"
      [attr.tabindex]="(rla1.isActive ? -1: 0)">

      <mat-list-item>
        <mat-icon mat-list-icon>emoji_objects</mat-icon>
        <h3 mat-line>Design Philosophy</h3>
        <p mat-line>Architecture, Life Cycles & Ethics</p>
      </mat-list-item>
    </button>

    <mat-divider></mat-divider><br>


    <h2>What I Bring</h2>

    <button
      routerLink="/citi"
      routerLinkActive="active-link"
      #rla2="routerLinkActive"
      [attr.tabindex]="(rla2.isActive ? -1: 0)">
      <mat-list-item>
        <img mat-list-icon src="../../assets/citi.png">
        <h3 mat-line>Citi</h3>
        <p mat-line> Digital Design language </p>
      </mat-list-item>
    </button>

    <mat-divider></mat-divider><br>

    <h2>Where I'm Going</h2>

    <button
      routerLink="/cutcal"
      routerLinkActive="active-link"
      #rla3="routerLinkActive"
      [attr.tabindex]="(rla3.isActive ? -1: 0)">
      <mat-list-item>
        <img mat-list-icon src="../../assets/cutcal.png">
        <h3 mat-line>CutCal</h3>
        <p mat-line> Meal/Nutrition Planner </p>
      </mat-list-item>
    </button>

    <button
      routerLink="/time-picker"
      routerLinkActive="active-link"
      #rla4="routerLinkActive"
      [attr.tabindex]="(rla4.isActive ? -1: 0)">
      <mat-list-item>
        <mat-icon mat-list-icon>schedule</mat-icon>
        <h3 mat-line>TimePicker</h3>
        <p mat-line> A Material Design Addon </p>
      </mat-list-item>
    </button>

    <mat-divider></mat-divider><br>

    <button
      routerLink="/about-me"
      routerLinkActive="active-link"
      #rla5="routerLinkActive"
      [attr.tabindex]="(rla5.isActive ? -1: 0)">
      <mat-list-item>
        <img mat-list-icon src="../../assets/me.jpg">
        <h3 mat-line>About Nate</h3>
        <p mat-line> </p>
      </mat-list-item>
    </button>

    <button
      routerLink="/documents"
      routerLinkActive="active-link"
      #rla6="routerLinkActive"
      [attr.tabindex]="(rla6.isActive ? -1: 0)">
      <mat-list-item>
        <mat-icon mat-list-icon>folder</mat-icon>
        <h3 mat-line>Documents</h3>
        <p mat-line>Resume, Reports and Case Study </p>
      </mat-list-item>
    </button>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
