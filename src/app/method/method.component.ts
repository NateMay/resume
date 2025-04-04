import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-method',
    template: `
  <div class="sticky-elements">

    <section class="sticky-element">
      <div class="center-spacing"></div>
      <hr class="blue-hr">
      <div class="inline">
        <h1 class="design">design</h1>
      </div>
      <div class="inline">
        <span class="pron">[ dih-<b>zahyn</b> ]</span>
        <span class="inline">
          <button mat-icon-button (click)="audio.play()" class="speak" aria-label="Pronunciation">
            <mat-icon>volume_up</mat-icon>
          </button>
          <audio preload="none" #audio>
            <source src="https://static.sfdict.com/audio/lunawav/D02/D0214200.ogg" type="audio/ogg">
            <source src="https://static.sfdict.com/audio/D02/D0214200.mp3" type="audio/mpeg">
          </audio>
        </span>
      </div>
      <div class="noun">noun</div>
      <p class="definition">
        The process of optimizing the interface between a user and a solution or information.
      </p>
      <br>
      <hr class="blue-hr">
      <ng-container *ngTemplateOutlet="down; context: blue"></ng-container>
    </section>


    <section class="sticky-element purple">
      <div class="center-spacing"></div>
      <hr class="white-hr">
      <br>
      <p style="color: #fff; font-size:20px; text-align: center;">
        The "optimal" design is subjective, so designers should apply the <b><u>scientific method</u></b>.
      </p>
      <br>
      <hr class="white-hr">
      <ng-container *ngTemplateOutlet="down; context: white"></ng-container>
    </section>


    <section class="sticky-element">
      <mat-tab-group>

        <mat-tab label="Question">
          <div class="center-spacing-methods"></div>
          <span class="step">Question</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            It's hard to image creating a solution before you understand the problem.
            Therefore, <b>needs identification</b> should begin each iteration of the engineering process.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

        <mat-tab label="Hypothesis">
          <div class="center-spacing-methods"></div>
          <span class="step">Hypothesis</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            I'm saddened to observe web design as a "one and done" process. The <b>ideation</b> step should
            yield a variety of designs for ongoing trials.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

        <mat-tab label="Experiment">
          <div class="center-spacing-methods"></div>
          <span class="step">Experiment</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            Design options should be tested in the real world via <b>A/B testing</b>.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

        <mat-tab label="Data">
          <div class="center-spacing-methods"></div>
          <span class="step">Data</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            <b>Quantitative metrics</b> should be gathered for both ends of the interface: the user and the feature.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

        <mat-tab label="Analyze">
          <div class="center-spacing-methods"></div>
          <span class="step">Analyze</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            The goal should not be to select a single, optimal feature. Instead, <b>machine learning</b> should
            be leveraged to find and deliver the optimal interface per user.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

        <mat-tab label="Conclusion">
          <div class="center-spacing-methods"></div>
          <span class="step">Conclusion</span>
          <hr class="blue-hr">
          <br>
          <p style="font-size:20px;">
            A/B testing can then facilitate <b>ongoing, individualization</b> to optimize any user's interface to the solution.
          </p>
          <br>
          <hr class="blue-hr">
        </mat-tab>

      </mat-tab-group>
      <ng-container *ngTemplateOutlet="down; context: blue"></ng-container>
    </section>


    <section class="sticky-element purple">
      <div class="center-spacing"></div>
      <hr class="white-hr">
      <br>
      <q style="font-size: 20px;">
        For companies that make it into the top quartile of [design], the prizes are as rich as doubling their
        revenue growth and shareholder returns over those of their industry counterparts.
      </q>
      <br><br>
      <a
        style="float:right; color: #fff; text-decoration:underline"
        href="https://www.mckinsey.com/business-functions/mckinsey-design/our-insights/the-business-value-of-design"
        target="_blank"
      > - McKinsey & Company</a>
      <br>
      <hr class="white-hr">
      <ng-container *ngTemplateOutlet="down; context: white"></ng-container>
    </section>


    <section class="sticky-element">
      <div class="center-spacing-methods"></div>
      <div style="width: 100%" >
          <iframe
            height="320px"
            src="https://www.youtube.com/embed/Fx_ifzzuBaQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>
    </section>
  </div>

  <ng-template #down let-fill>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="46.463px" height="46.464px" viewBox="0 0 46.463 46.464" style="position:absolute; bottom: 32px; right: 32px"
    xml:space="preserve">
    <g>
      <g>
        <path [attr.fill]="fill" style="opacity: 0.8" d="M3.48,23.906c4.698,5.795,9.397,11.59,14.094,17.385c1.332,1.644,4.613,7.498,7.316,4.162
          c3.905-4.816,7.812-9.635,11.716-14.453c2.519-3.105,6.459-6.545,8.218-10.167c1.99-4.099-7.366-2.99-9.822-2.846
          c-1.323-0.853-0.486-6.871-0.486-8.142c0-2.087,0.801-6.003-0.012-7.963C33.767,0.104,32.541,0.2,30.819,0.2
          c-3.859,0-7.721,0-11.581,0c-1.688,0-4.309-0.53-5.923,0.138c-2.295,0.95-1.795,2.915-1.795,5.079c0,3.539,0,7.077,0,10.616
          c0,0.618,0.316,1.97-0.469,1.97c-1.99,0-3.979,0-5.969,0C-0.165,18.001,0.958,20.793,3.48,23.906z M37.227,23.295
          c0.467-1.232,0.959-2.455,1.46-3.67c0.033-0.08,0.034-0.151,0.044-0.225c0.258,0,0.516,0,0.772,0
          c-0.049,0.063-0.106,0.123-0.142,0.19c-0.657,1.261-1.322,2.518-2.003,3.767C37.095,23.84,37.032,23.812,37.227,23.295z
          M41.556,19.587c0.035-0.066,0.038-0.126,0.056-0.188c0.177,0,0.354,0,0.53,0c-0.038,0.065-0.077,0.125-0.11,0.194
          c-0.936,1.852-1.848,3.716-2.764,5.578c-0.877,1.082-1.754,2.164-2.631,3.246C38.358,25.523,39.995,22.577,41.556,19.587z
          M12.904,32.5c-0.016-0.02-0.032-0.039-0.048-0.06c0.021-0.028,0.047-0.043,0.066-0.075c2.052-3.566,4.134-7.111,6.281-10.608
          c2.476-4.034,5.091-7.984,7.596-11.994c0.293-0.468,0.295-0.469,0.006,0.002c-4.627,7.534-9.224,15.086-13.854,22.618
          C12.929,32.418,12.921,32.463,12.904,32.5z M17.542,38.021c-0.026,0.038-0.038,0.085-0.06,0.126
          c-0.224-0.276-0.449-0.554-0.673-0.831c0.057-0.104,0.112-0.207,0.17-0.309c4.075-6.161,8.126-12.338,12.21-18.493
          c0.307-0.46,0.377-0.423,0.152,0.081c-0.47,1.052-0.964,2.092-1.483,3.119C24.583,27.256,21.205,32.729,17.542,38.021z
          M32.863,29.479c-0.362,1.032-0.729,2.062-1.097,3.092c-0.186,0.52-0.573,1.322-0.869,1.788c-1.114,1.755-2.283,3.519-3.515,5.255
          c-0.319,0.45-0.376,0.414-0.121-0.074c1.36-2.613,2.737-5.219,4.16-7.805c0.427-0.775,0.855-1.551,1.285-2.326
          C32.973,28.926,33.044,28.957,32.863,29.479z M33.98,19.346c0.136,0.056,0.287,0.067,0.443,0.049c0.011,0,0.017,0.004,0.028,0.004
          c0.56,0,1.121,0,1.682,0c-4.802,8.031-9.458,16.148-14.012,24.322c-0.018,0.031-0.027,0.062-0.044,0.096
          c-1.159-1.43-2.318-2.859-3.477-4.289c4.29-5.84,8.393-11.824,11.615-18.25c0.79-1.339,1.572-2.683,2.354-4.026
          c-0.005,0.178-0.008,0.333-0.008,0.448C32.561,18.768,33.15,19.001,33.98,19.346z M32.793,8.039
          c0.001,0.166,0.002,0.333,0.003,0.501c-0.077,0.087-0.155,0.173-0.231,0.262c-0.221,0.261-0.197,0.073,0.054-0.419
          C32.676,8.268,32.735,8.154,32.793,8.039z M32.614,4.262c-3.704,7.269-7.441,14.539-11.396,21.681
          c-1.025,1.83-2.049,3.651-3.105,5.427c-0.867,1.459-1.716,2.93-2.556,4.403c-0.495-0.61-0.99-1.221-1.485-1.832
          c0.023-0.03,0.053-0.046,0.074-0.081c6.157-10,12.241-20.046,18.417-30.033C32.581,3.965,32.597,4.112,32.614,4.262z
          M31.489,1.781c0.034-0.065,0.038-0.123,0.057-0.184c0.021,0,0.05,0,0.069,0c0.072,0,0.141,0.028,0.206,0.068
          c-0.019,0.029-0.035,0.054-0.054,0.083c-1.006,1.618-2.014,3.234-3.015,4.854c-0.29,0.47-0.292,0.468-0.008-0.006
          C29.692,5.01,30.612,3.408,31.489,1.781z M28.876,1.545c0.23,0.005,0.452,0.01,0.662,0.014c-0.062,0.073-0.127,0.145-0.17,0.224
          c-4.292,8.083-9.678,15.591-14.367,23.448c-1.113,1.866-2.21,3.744-3.301,5.626c-0.019,0.033-0.024,0.074-0.041,0.109
          c-0.477-0.59-0.954-1.178-1.431-1.766c0.021-0.029,0.048-0.043,0.067-0.076c0.92-1.596,1.84-3.19,2.756-4.787
          c4.894-7.79,10.167-15.341,15.749-22.647C28.842,1.64,28.851,1.596,28.876,1.545z M25.208,1.48
          c0.581,0.008,1.144,0.017,1.685,0.026c-0.064,0.062-0.139,0.12-0.188,0.186c-1.336,1.752-2.659,3.516-3.959,5.294
          c-0.326,0.446-0.384,0.411-0.133-0.081c0.861-1.691,1.7-3.393,2.516-5.105C25.181,1.688,25.203,1.582,25.208,1.48z M16.87,1.544
          c0.015-0.001,0.03-0.001,0.045-0.002C16.805,1.702,16.788,1.703,16.87,1.544z M13.476,2.145c0-0.184,0.449-0.32,1.197-0.422
          c-0.011,0.018-0.031,0.034-0.041,0.052c-0.384,0.692-0.77,1.383-1.156,2.074C13.476,3.28,13.476,2.711,13.476,2.145z
          M5.968,23.789c0.8-1.404,1.596-2.811,2.389-4.218c0.006-0.01,0.004-0.019,0.009-0.028c2.14,0.17,4.256,0.191,4.761-1.029
          c0.828-1.999,0.349-4.622,0.349-6.742c0-0.394,0-0.787,0-1.18c1.747-2.997,3.539-5.96,5.426-8.857
          c0.06-0.091,0.084-0.175,0.106-0.256c1.331-0.025,2.78-0.028,4.215-0.018c-0.098,0.106-0.181,0.221-0.238,0.342
          c-3.653,7.707-7.806,15.176-12.062,22.594c-0.65,1.035-1.284,2.078-1.917,3.122c-0.021,0.035-0.027,0.079-0.045,0.116
          c-1.019-1.258-2.038-2.514-3.057-3.771C5.923,23.836,5.95,23.822,5.968,23.789z M4.759,19.313
          c-0.076,0.082-0.153,0.165-0.205,0.255c-0.276,0.484-0.553,0.968-0.829,1.452c-0.01,0.018-0.012,0.042-0.022,0.061
          C2.852,19.757,3.485,19.361,4.759,19.313z"/>
      </g>
    </g>

    </svg>

  </ng-template>
  `,
    styleUrls: ['./method.component.scss'],
    standalone: false
})
export class MethodComponent implements OnInit {

  elements = [
    'Question / needs identification',
    'Hypothesis',
    'Experiment',
    'Data',
    'Analyze',
    'Report'
  ];

  white = { $implicit: '#fff'};
  blue = { $implicit: '#3f51b5'};

  constructor() { }

  ngOnInit() {
  }

}
