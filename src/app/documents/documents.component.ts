import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-documents',
    template: `
    <p>
      documents works!
    </p>
  `,
    styleUrls: ['./documents.component.scss'],
    standalone: false
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
