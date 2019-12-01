import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-about-me',
  template: `
    <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">
      <div fxFlex="100%" fxFlex.gt-sm="45%">
        <slideshow
          [minHeight]="'425px'"
          [autoPlayInterval]="5000"
          [autoPlay]="true"
          [showArrows]="true"
          [imageUrls]="images">
        </slideshow>
      </div>
      <div fxFlex>
        <h2>Nathaniel Adam May</h2>
        <h6 class="hyphens">Software Developer - Application Architect </h6>
        <br>
        <a class="link" href="https://www.linkedin.com/in/nathaniel-may-9b1b53b/" target="_blank" matTooltip="linkedIn">
          <img src="../../assets/linkedin.png">
        </a>
        <a class="link" href="https://www.facebook.com/nate.may.773" target="_blank" matTooltip="facebook">
          <img src="../../assets/facebook.png">
        </a>
        <a class="link" href="https://cutcal.com/calendar/month/(dmy:28-1-2020)" target="_blank" matTooltip="CutCal">
          <img src="../../assets/cutcal.png">
        </a>
        <a mat-icon-button color="primary" style="position: absolute" matTooltip="Resume" href="../../assets/nathan_may.doc">
          <mat-icon style="font-size:45px; margin-left: -30px;">insert_drive_file</mat-icon>
        </a>
        <br><br>
        <h3>Hobbies</h3>
        <ul style="padding-left: 18px;">
          <li>Boulder Climbing</li>
          <li>Weight Lifting</li>
          <li>Playing Hockey</li>
          <li>Watching most Sports</li>
          <li>Web Devlopment (both a hobby and a career)</li>
          <li>Chess</li>
          <li>MCU Movies</li>
        </ul>
        <p>
          I'm also a dilettante of physics, moral and politcal philosophy, and evolutionary histroy. Although I don't
          consider myself relgious, I'm fascinated by the history surrounding the bible. Most of my undergraduate
          electives were in these fields.
        </p>
      </div>
    </div>
    
    <section>
    <h3>Background</h3>
    <p>
      I joined the military after high school because I was promised glory. I didn't find any in Iraq
      or Afganistan, but I did devlop a passion for learning. I started inviting my free cash, studied
      up, and was accepted into the University of Illinois for Finance. I figured that with a Computer Science
      minor I could write an algorithm to make my investment decisions for me.
    </p>
    <p>
      My first job was in tech consulting at <a href="https://www.fticonsulting.com/" target="_blank">FTI consulting</a>.
      There, I discovered my passion for building web applications which take the power of computer information processing
      and make it available to to you wherever you are.
    </p>
    <p>
      As a contractor at Citi, I became dev lead for my team in five months and was hired in full time not long after.
      Since then I have been able to take a crumby UI library and make it really good. With my development and application
      architecture skills, my next step is to learn how to design well. With that skill set, I know that I can create some
      amazing things.
    </p>
    </section>
  `,
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  images: IImage[] = [
    {
      url: '../../assets/filter.jpg',
    }, {
      url: '../../assets/gang.jpg',
      caption: 'Best friends to this day (2001)'
    }, {
      url: '../../assets/tower.JPG',
      caption: 'Backpacking Europe while stationed in Germany (2007)'
    }, {
      url: '../../assets/army.jpg',
      caption: 'Photo op on patrol in Afganistan (2010)'
    }, {
      url: '../../assets/china.jpg',
      caption: 'Technology & Managment (minor) trip to China (2013)'
    }, {
      url: '../../assets/grad.jpg',
      caption: 'University of Illinois graduation. Double major, double minor, Dean\'s Scroll, Senior Honorary 100 (2014)'
    }, {
      url: '../../assets/climb.JPG',
      caption: 'Climbing: My favorite hobby (2016)'
    }, {
      url: '../../assets/chess.jpg',
      caption: 'I love chess, but I\'m in a rough spot here (2018)'
    }, {
      url: '../../assets/hockey.jpg',
      caption: 'Hockey for a small audience (2019)'
    }, {
      url: '../../assets/carousel.png',
      caption: 'Coding this carousel. I love coding (2019)'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
