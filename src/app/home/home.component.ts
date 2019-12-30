import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <div class="notepad">
    <b>Hi! I'm Nate,</b>
    <p>
      This is a portfolio that I put together for my grad school applications. I wrote it using the <a href="https://angular.io/" target="_blank">Angular</a> 
      framework, the <a href="https://material.angular.io/" target="_blank">Angular Material</a> component library, and I'm hosting it on
      <a href="https://firebase.google.com/" target="_blank">Firebase</a>.
      <br><br>
      I'm a really good web developer and application architect. I believe that I have all of the technical skills
      necessary to create and maintain a web product through it entire life cycle, but that won't mean much if I can't
      implement a quality design system.
      <br><br>
      <b>I'm pursuing a graduate program where I can learn the design process and apply it to my passion project, CutCal.</b>
      <br><br>
      The way I see it, design is a fundamental for CutCal's success and the most challenging aspect.
      <br><br>
      I hope to convince you of the following:
    </p>
    <ul>
      <li>My perspective of design is unique, valid, and gives me direction</li>
      <li>I possess the technical skills to implement a design architecture</li>
      <li>I will bring unique design experience with me</li>
      <li>I have a practical application for these skills in industry</li>
    </ul>
    <p>Thank you for your consideration.
    <br><br>
    sincerely,
    <br><br>
    Nate May
    </p>
  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
