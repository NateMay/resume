import { Component, OnInit } from '@angular/core';
import { IImage } from '../slideshow/IImage';

@Component({
  selector: 'app-about-me',
  template: `
    <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="32px">
      <div fxFlex="100%" fxFlex.gt-sm="45%">
        <app-slideshow
          [minHeight]="'425px'"
          [autoPlayInterval]="5000"
          [autoPlay]="true"
          [showArrows]="true"
          [imageUrls]="images">
        </app-slideshow>
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
        <!-- <a class="link" href="https://youtu.be/tHYDZOiGXAk" target="_blank" matTooltip="YouTube Introduction">
          <img src="../../assets/youtube.png">
        </a> -->
        <a class="link" href="https://stackoverflow.com/users/10235442/nate-may?tab=profile" target="_blank" matTooltip="StackOverflow">
          <img src="../../assets/stackoverflow.png">
        </a>
        <a mat-icon-button color="primary" style="position: absolute" matTooltip="Resume" target="_blank" href="../../assets/resume.pdf">
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
        or Afghanistan, but I did develop a passion for learning. I started inviting my free cash, studied
        up, and was accepted into the University of Illinois for Finance. I figured that with a Computer Science
        minor I could write an algorithm to make my investment decisions for me.
      </p>
      <p>
        My first job was in tech consulting at <a href="https://www.fticonsulting.com/" target="_blank">FTI consulting</a>.
        There, I discovered my passion for building web applications which take the power of computer information processing
        and make it available to you wherever you are.
      </p>
      <p>
        As a contractor at <a href="https://www.citigroup.com/citi/" target="_blank">Citi</a>, I became dev lead for my team
        in five months and was hired in full time not long after. Since then I have been able to take a crummy UI library and
        make it really good. With my coding skill and experience with application architecture, my next step is to learn how
        to design well. With design as my compass, I know that I can create some amazing things.
      </p>
    </section>
    <section fxLayout="column" fxLayout.gt-sm="row" fxLayoutAlign="center center" fxLayoutGap="20px">

      <iframe
        fxFlex="50%"
        height="300px"
        src="https://www.youtube.com/embed/tHYDZOiGXAk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        fxFlex="50%"
        height="300px"
        src="https://www.youtube.com/embed/1Fe5Rou9Ng4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

    </section>

    <section>
      <h3>How I See Me</h3>
      <p>
        Although I consider myself a loner and an introvert, I'm not anti-social; I just enjoy my alone-time
        and require it to recharge. My natural intensity, frankness, and confidence tends to command respect, but
        can also be polarizing, but I've improved in this regard.
      </p>
      <p>
        I think my strongest quality is my communication skills, but that has recently become a
        double-edged sword. I consider myself a great communicator because I can identify communication traps,
        so I tend to speak with precision. However, I find that have to ask others to repeat themselves more often
        than others. It's not that I'm a bad listener, I think I just get distracted while resolving ambiguities.
      </p>
      <p>
        Considering how much I have grown, I'm happy to consider this my biggest weakness. In the past, arrogance,
        vulgar bluntness, and aggressiveness have been my personal weaknesses. I am happy to have conquered these
        flaws and feel that I am the best version of myself to date.
      </p>
    </section>

    <button mat-raised-button
      color="primary"
      class="next-section"
      routerLink="/home"
      >
      Home<mat-icon>chevron_right</mat-icon>
    </button>
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
