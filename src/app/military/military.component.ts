import { Component } from '@angular/core'
import { IImage } from '../slideshow/IImage'

@Component({
  selector: 'app-military',
  template: `
    <img class="hero" src="../../assets/afghan.JPG" />
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
        <b>Fort Benning</b>: Nate’s enlistment began in June of 2005 and he was
        sent to Fort Benning Georgia for basic training. There he trained to
        become an infantryman for 16 weeks and earned the specialization of
        mortar infantryman.
      </image-row>
      <image-row src="../../assets/military-locations/germany.png">
        <b>Germany, Schweinfurt</b>: Nate’s first assignment was in Germany as a
        part of the 1st Infantry Division. 1-26 Infantry was a mechanized unit
        and Nate participated in several training operations throughout Germany
        to prepare for the upcoming deployment.
      </image-row>
      <image-row src="../../assets/military-locations/iraq.png">
        <b>Iraq, Baghdad</b>: In August 2006, 1-26 Infantry, along with Nate,
        deployed to Baghdad Iraq. Saddam Hussein’s loyal Sunnis resided west of
        the river and were overrun in the initial invasion. 1-26 was tasked with
        occupying the poorer, Shia area east of the river. During this 15 month
        deployment, Nate earned a Purple Heart Medal and an Army Commendation
        for Valor.
      </image-row>
      <image-row src="../../assets/military-locations/washington.png">
        <b>Washington, Ft. Lewis</b>: After his Iraq deployment, Nate was
        restationed in Washington state as a part of the 2nd Infantry Division,
        5-2 Infantry. He completed Infantry Mortar Leader’s Course and assumed
        the role of Fire Direction Control, responsible for calculating the
        ballistics of the platoon’s mortar systems during training. With his
        war-time credentials, Nate was promoted to Sergeant, taking command of a
        5-man team and their Mortar Styker Vehicle during a 45-day training
        exercise in Ft. Irwin California to prepare for the upcoming deployment.
      </image-row>
      <image-row src="../../assets/military-locations/afghan.png">
        <b>Afghanistan, Kandahar</b>: In July 2009, Nate and 5-2 Infantry
        deployed to the Southeastern Afghanistan providence of Kandar. Just
        before the deployment, Nate was promoted to Section Sergeant of the
        Bravo Company mortar section. During the year-long deployment, Nate
        oversaw more than 700 fire missions split between his 2-team, 10-man
        section.
      </image-row>
      <image-row src="../../assets/military-locations/illinois.png">
        <b>Illinois, Bartonville</b>: Although Nate was permitted to out-process
        the military quickly after his Afghanistan deployment, he was required
        to serve 1 year in the Illinois National Guard while attending the
        University of Illinois.
      </image-row>
    </section>
    <section class="container">
      <h2>Awards</h2>
      <div class="awards">
        <mat-card >
          <mat-card-header>
            <mat-card-title>Purple Heart Medal</mat-card-title>
            <mat-card-subtitle>combat wounded veteran</mat-card-subtitle>
          </mat-card-header>
          <img
            mat-card-image
            src="../../assets/awards/Purple_Heart_Medal.png"
            alt="Purple Heart Medal"
          />
          <mat-card-content>
            <p>
              The Purple Heart is a United States military decoration awarded in
              the name of the President to those wounded or killed while serving
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card >
          <mat-card-header>
            <mat-card-title>2× Army Commendation Medal</mat-card-title>
            <mat-card-subtitle>1 with "V" device</mat-card-subtitle>
          </mat-card-header>
          <img
            mat-card-image
            src="../../assets/awards/unnamed.gif"
            alt="Army Commendation Medal with V device"
          />
          <mat-card-content>
            <p>
              The Commendation Medal is a mid-level United States military
              decoration presented for sustained acts of heroism or meritorious
              service.
            </p>
            <p>
              A "V" device distinguishes an award for heroism or valor in combat
              instead of for meritorious service or achievement.
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card >
          <mat-card-header>
            <mat-card-title>4× Army Achievement Medal</mat-card-title>
            <mat-card-subtitle>for merit</mat-card-subtitle>
          </mat-card-header>
          <img
            mat-card-image
            src="../../assets/awards/achievement.png"
            alt="schuetzenschnur"
          />
          <mat-card-content>
            <p>
              The Army Achievement Medal is awarded for outstanding achievement
              or meritorious service.
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card >
          <mat-card-header>
            <mat-card-title>Geld Schuetzenschnur</mat-card-title>
            <mat-card-subtitle>expert weapons proficiency</mat-card-subtitle>
          </mat-card-header>
          <img
            mat-card-image
            src="../../assets/awards/schuetzenschnur.png"
            alt="schuetzenschnur"
          />
          <mat-card-content>
            <p>
              The Gold Schuetzenschnur is a decoration of Germany military
              awarded the highest grade of weapons proficiency.
            </p>
          </mat-card-content>
        </mat-card>
      </div>
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
    },
    {
      url: '../../assets/military-photos/army.jpg'
    }
  ]
}
