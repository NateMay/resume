import { Component } from '@angular/core'
import { IImage } from '../slideshow/IImage'

@Component({
  selector: 'app-military',
  template: `
    <hero style="background-image: url('../../assets/camogen.png');">
      <img src="../../assets/world2.png" />
    </hero>
    <h1>Military Service</h1>


    <app-slideshow
      [minHeight]="'425px'"
      [autoPlayInterval]="5000"
      [autoPlay]="true"
      [showArrows]="true"
      [imageUrls]="images"
    ></app-slideshow>

    <section class="container">
      <image-row src="../../assets/military-locations/georgia.png">
      <b>Fort Benning</b>: Nate’s enlistment began in June of 2005 and he was sent to Fort Benning Georgia for basic training. There he trained to become an infantryman for 16 weeks and earned the specialization of mortar infantryman. 
      </image-row> 
      <image-row src="../../assets/military-locations/germany.png">
      <b>Germany, Schweinfurt</b>: Nate’s first assignment was in Germany as a part of the 1st Infantry Division. 1-26 Infantry was a mechanized unit and Nate participated in several training operations throughout Germany to prepare for the upcoming deployment.
      </image-row>
      <image-row src="../../assets/military-locations/iraq.png">
      <b>Iraq, Baghdad</b>: In August 2006, 1-26 Infantry, along with Nate, deployed to Baghdad Iraq. Saddam Hussein’s loyal Sunnis resided west of the river and were overrun in the initial invasion. 1-26 was tasked with occupying the poorer, Shia area east of the river. During this 15 month deployment, Nate earned a Purple Heart Medal and an Army Commendation for Valor. 
      </image-row>
      <image-row src="../../assets/military-locations/washington.png">
      <b>Washington, Ft. Lewis</b>: After his Iraq deployment, Nate was restationed in Washington state as a part of the 2nd Infantry Division, 5-2 Infantry. He completed Infantry Mortar Leader’s Course and assumed the role of Fire Direction Control, responsible for calculating the ballistics of the platoon’s mortar systems during training. With his war-time credentials, Nate was promoted to Sergeant, taking command of a 5-man team and their Mortar Styker Vehicle during a 45-day training exercise in Ft. Irwin California to prepare for the upcoming deployment.
      </image-row>
      <image-row src="../../assets/military-locations/afghan.png">
        <b>Afghanistan, Kandahar</b>: In July 2009, Nate and 5-2 Infantry deployed to the Southeastern Afghanistan providence of Kandar. Just before the deployment, Nate was promoted to Section Sergeant of the Bravo Company mortar section. During the year-long deployment, Nate oversaw more than 700 fire missions split between his 2-team, 10-man section. 
      </image-row>
      <image-row src="../../assets/military-locations/illinois.png">
      <b>Illinois, Bartonville</b>: Although Nate was permitted to out-process the military quickly after his Afghanistan deployment, he was required to serve 1 year in the Illinois National Guard while attending the University of Illinois.
      </image-row>
    </section>
  `,
  styleUrls: ['./military.component.scss']
})
export class MilitaryComponent {
  images: IImage[] = [
    {
      url: '../../assets/military-photos/Platoon5.JPG'
    },
    {
      url: '../../assets/military-photos/Me1.jpg'
    },
    {
      url: '../../assets/military-photos/Pirate9.jpg'
    }
  ]
}
