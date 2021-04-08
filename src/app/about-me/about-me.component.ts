import { Component, OnInit } from '@angular/core';
import { IImage } from '../slideshow/IImage';

@Component({
  selector: 'app-about-me',
  template: `
    <hero style="background-image: url('../../assets/camogen.png');">
      <img src="../../assets/hockey-banner.jpg">
    </hero>
    <h1>About Nate</h1>

    <section fxLayoutAlign="center center"> 
      <iframe
        height="300px"
        width="500px"
        src="https://www.youtube.com/embed/tHYDZOiGXAk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
      <!-- <app-slideshow
          [minHeight]="'325px'"
          [autoPlayInterval]="5000"
          [autoPlay]="true"
          [showArrows]="true"
          [imageUrls]="images">
        </app-slideshow> -->
    <div fxLayout="column" fxLayout.gt-sm="row" fxLayoutGap="4rem" class="container">
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
    </div>
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
