import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { SlideshowComponent } from './slideshow.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserTransferStateModule
  ],
  declarations: [
    SlideshowComponent
  ],
  exports: [
    SlideshowComponent
  ]
})
export class SlideshowModule { }
