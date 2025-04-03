import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SlideshowComponent } from './slideshow.component'

@NgModule({
  imports: [CommonModule],
  declarations: [SlideshowComponent],
  exports: [SlideshowComponent]
})
export class SlideshowModule {}
