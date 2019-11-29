import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-about-me',
  template: `
    <div fxLayout="row">
      <div fxFlex="400px;">
        <slideshow
          [minHeight]="'425px'"
          [autoPlayInterval]="4000"
          [autoPlay]="true"
          [showArrows]="true"
          [imageUrls]="images">
        </slideshow>
      </div>
    </div>
    <section>
      about-me works!
    </section>
  `,
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  images: IImage[] = [
    {
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
      caption: 'T&M trip to China (2013)'
    }, {
      url: '../../assets/grad.jpg',
      caption: 'Univesity of Illinois graduation (2014)'
    }, {
      url: '../../assets/climb.JPG',
      caption: 'Climbing: My favorite hobby (2016)'
    }, {
      url: '../../assets/chess.jpg',
      caption: 'I love chess, but I\'m in a rough spot here (2018)'
    }, {
      url: '../../assets/carousel.png',
      caption: 'Coding this carousel. I love coding (2019)'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
