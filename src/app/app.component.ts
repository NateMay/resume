import { Component } from '@angular/core'
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon('github', this.clean('assets/github.svg'));
    this.iconRegistry.addSvgIcon('youtube', this.clean('assets/youtube.svg'));
    this.iconRegistry.addSvgIcon('stackoverflow', this.clean('assets/stackoverflow.svg'));
    this.iconRegistry.addSvgIcon('linkedin', this.clean('assets/linkedin.svg'));
  }

  clean(path: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path)
  }
}
