import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'n8-image-circle',
  template: `
    <div class="circle"></div>
    <img class="img" src="../../../assets/china.jpg">
  `,
  styleUrls: ['./image-circle.component.scss']
})
export class ImageCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
