import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-me',
    template: `

    <img class="hero" src="../../assets/hockey-banner.jpg">

    <h1>About Nate</h1>

    <section class="conatiner" >
      <iframe
        height="300px"
        width="500px"
        src="https://www.youtube.com/embed/tHYDZOiGXAk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
    <h2 style="text-align:center">Nasty Nate Shuffle</h2>

    <section  class="conatiner">
      <iframe
        height="300px"
        width="500px"
        src="https://www.youtube.com/embed/jDxio7HP_as"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>

    <section >
      <iframe
        height="300px"
        width="500px"
        src="https://www.youtube.com/embed/mQLnbQx6iuU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>

    <section >
      <iframe
        height="300px"
        width="500px"
        src="https://www.youtube.com/embed/Nyfm_WownS8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>

  `,
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
