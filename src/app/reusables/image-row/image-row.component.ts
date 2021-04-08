import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-row',
  template: `
    <img [attr.src]="src">
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./image-row.component.scss']
})
export class ImageRowComponent implements OnInit {
  @Input() src: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
