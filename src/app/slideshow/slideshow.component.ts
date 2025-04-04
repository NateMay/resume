// import { SwipeService } from './swipe.service';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, Inject, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2, SimpleChanges, ViewChild, makeStateKey, TransferState } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IImage } from './IImage';
import { ISlide } from './ISlide';
import { PointerService } from './pointer.service';

const FIRST_SLIDE_KEY = makeStateKey<any>('firstSlide');
// tslint:disable:no-conflicting-lifecycle
// tslint:disable:no-output-on-prefix
@Component({
    selector: 'app-slideshow',
    host: { 'class': 'app-slideshow' },
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
    providers: [PointerService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SlideshowComponent
  implements OnInit, DoCheck, OnChanges, OnDestroy {
  slideIndex = -1;
  slides: ISlide[] = [];
  hideLeftArrow = false;
  hideRightArrow = false;
  private urlCache: (string | IImage)[];
  private autoplayIntervalId: any;
  private initial = true;
  private isHidden = false;
  private slideSub: Subscription;
  private clickSub: Subscription;

  @Input() imageUrls: (string | IImage)[] = [];
  @Input() height = '100%';
  @Input() minHeight: string;
  @Input() arrowSize: string;
  @Input() showArrows = true;
  @Input() disableSwiping = false;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3333;
  @Input() stopAutoPlayOnSlide = true;
  @Input() autoPlayWaitForLazyLoad = true;
  @Input() debug: boolean;
  @Input() backgroundSize = 'cover';
  @Input() backgroundPosition = 'center center';
  @Input() backgroundRepeat = 'no-repeat';
  @Input() showDots = false;
  @Input() dotColor = '#FFF';
  @Input() showCaptions = true;
  @Input() captionColor = '#FFF';
  @Input() captionBackground = 'rgba(0, 0, 0, .35)';
  @Input() lazyLoad = false;
  @Input() hideOnNoSlides = false;
  @Input() fullscreen = false;
  @Input() enableZoom = false;
  @Input() enablePan = false;
  @Input() noLoop = false;

  @Output() onSlideLeft = new EventEmitter<number>();
  @Output() onSlideRight = new EventEmitter<number>();
  @Output() onSwipeLeft = new EventEmitter<number>();
  @Output() onSwipeRight = new EventEmitter<number>();
  @Output() onFullscreenExit = new EventEmitter<boolean>();
  @Output() onIndexChanged = new EventEmitter<number>();
  @Output() onImageLazyLoad = new EventEmitter<ISlide>();
  @Output() onClick = new EventEmitter<{ slide: ISlide; index: number }>();

  @ViewChild('container', { static: true }) container: ElementRef;
  @ViewChild('prevArrow') prevArrow: ElementRef;
  @ViewChild('nextArrow') nextArrow: ElementRef;

  get safeStyleDotColor(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--dot-color: ${this.dotColor}`
    );
  }

  constructor(
    private pointerSvc: PointerService,
    private renderer: Renderer2,
    private transferState: TransferState,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    if (this.debug !== undefined) {
      console.warn(
        '[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0'
      );
    }
    this.pointerSvc.bind(this.container);
    this.slideSub = this.pointerSvc.slideEvent.subscribe(
      (indexDirection: number) => {
        this.onSlide(indexDirection, true);
      }
    );
    this.clickSub = this.pointerSvc.clickEvent.subscribe(() => {
      this._onClick();
    });
    if (this.noLoop) {
      this.hideLeftArrow = true;
    }
  }

  ngOnDestroy() {
    try {
      if (this.slideSub && !this.slideSub.closed) {
        this.slideSub.unsubscribe();
      }
    } catch (error) {
      console.warn(
        'Slide Subscription error caught in ng-simple-slideshow OnDestroy:',
        error
      );
    }

    try {
      if (this.clickSub && !this.clickSub.closed) {
        this.clickSub.unsubscribe();
      }
    } catch (error) {
      console.warn(
        'Click Subscription error caught in ng-simple-slideshow OnDestroy:',
        error
      );
    }

    try {
      this.pointerSvc.unbind(this.container);
    } catch (error) {
      console.warn(
        'Pointer Service unbind error caught in ng-simple-slideshow OnDestroy:',
        error
      );
    }

    try {
      if (this.autoplayIntervalId) {
        this.ngZone.runOutsideAngular(() =>
          clearInterval(this.autoplayIntervalId)
        );
        this.autoplayIntervalId = null;
      }
    } catch (error) {
      console.warn(
        'Autoplay cancel error caught in ng-simple-slideshow OnDestroy:',
        error
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.noLoop) {
      if (changes.noLoop.currentValue) {
        this.hideLeftArrow = this.slideIndex <= 0;
        this.hideRightArrow = this.slideIndex === this.slides.length - 1;
      } else {
        this.hideLeftArrow = false;
        this.hideRightArrow = false;
      }

      this.cdRef.detectChanges();
    }
  }

  ngDoCheck() {
    // if this is the first being called, create a copy of the input
    if (this.imageUrls && this.imageUrls.length > 0) {
      if (this.initial === true) {
        this.urlCache = Array.from(this.imageUrls);
      }

      if (this.isHidden === true) {
        this.renderer.removeStyle(this.container.nativeElement, 'display');
        this.isHidden = false;
      }

      this.setSlides();
    } else if (this.hideOnNoSlides === true) {
      this.renderer.setStyle(this.container.nativeElement, 'display', 'none');
      this.isHidden = true;
    }

    this.setStyles();
    this.handleAutoPlay();
    this.pointerSvc.disableSwiping = this.disableSwiping;
    this.pointerSvc.enableZoom = this.enableZoom;
    this.pointerSvc.enablePan = this.enablePan;
  }

  /**
   * @description this is the function that should be called to make the slides change.
   *              indexDirection to move back is -1, to move forward is 1, and to stay in place is 0.
   *              0 is taken into account for failed swipes
   */
  onSlide(indexDirection: number, isSwipe?: boolean): void {
    this.handleAutoPlay(this.stopAutoPlayOnSlide);
    this.slide(indexDirection, isSwipe);
  }

  // /**
  //  * @param {TouchEvent} e
  //  * @param {string} when
  //  * @description Use the swipe service to detect swipe events from phone and tablets
  //  */
  // onSwipe(e: TouchEvent, when: string): void {
  //   if (this.disableSwiping === true) {
  //     return;
  //   }

  //   const indexDirection = this._swipeService.swipe(e, when);
  //   // handle a failed swipe
  //   if (indexDirection === 0) {
  //     return;
  //   }
  //   else {
  //     this.onSlide(indexDirection, true);
  //   }
  // }

  /**
   * @description Redirect to current slide "href" if defined
   */
  private _onClick(): void {
    const currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];
    this.onClick.emit({ slide: currentSlide, index: this.slideIndex });

    if (currentSlide && currentSlide.image.clickAction) {
      currentSlide.image.clickAction();
    } else if (currentSlide && currentSlide.image.href) {
      this.document.location.href = currentSlide.image.href;
    }
  }

  /**
   * @description set the index to the desired index - 1 and simulate a right slide
   */
  goToSlide(index: number) {
    const beforeClickIndex = this.slideIndex;
    this.slideIndex = index - 1;
    this.setSlideIndex(1);

    if (this.slides[this.slideIndex] && !this.slides[this.slideIndex].loaded) {
      this.loadRemainingSlides();
    }

    this.handleAutoPlay(this.stopAutoPlayOnSlide);
    this.slideRight(beforeClickIndex);
    this.slides[beforeClickIndex].selected = false;
    this.slides[this.slideIndex].selected = true;

    this.cdRef.detectChanges();
  }

  /**
   * @description set the index to the desired index - 1 and simulate a right slide
   */
  getSlideStyle(index: number) {
    const slide = this.slides[index];

    if (slide && slide.loaded) {
      return {
        'background-image': 'url(' + slide.image.url + ')',
        'background-size': slide.image.backgroundSize || this.backgroundSize,
        'background-position':
          slide.image.backgroundPosition || this.backgroundPosition,
        'background-repeat':
          slide.image.backgroundRepeat || this.backgroundRepeat
      };
    } else {
      // doesn't compile correctly if returning an empty object, sooooo.....
      return {
        'background-image': undefined,
        'background-size': undefined,
        'background-position': undefined,
        'background-repeat': undefined
      };
    }
  }

  exitFullScreen(e: Event) {
    e.preventDefault();
    this.fullscreen = false;
    this.onFullscreenExit.emit(true);
  }

  /**
   * @description Set the new slide index, then make the transition happen.
   */
  private slide(indexDirection: number, isSwipe?: boolean): void {
    const oldIndex = this.slideIndex;

    if (this.setSlideIndex(indexDirection)) {
      if (
        this.slides[this.slideIndex] &&
        !this.slides[this.slideIndex].loaded
      ) {
        this.loadRemainingSlides();
      }

      if (indexDirection === 1) {
        this.slideRight(oldIndex, isSwipe);
      } else {
        this.slideLeft(oldIndex, isSwipe);
      }

      this.slides[oldIndex].selected = false;
      this.slides[this.slideIndex].selected = true;
    }

    this.cdRef.detectChanges();
  }

  /**
   * @description This is just treating the url array like a circular list.
   */
  private setSlideIndex(indexDirection: number): boolean {
    let willChange = true;
    this.slideIndex += indexDirection;

    if (this.noLoop) {
      this.hideRightArrow = this.slideIndex === this.slides.length - 1;
      this.hideLeftArrow = false;
    }

    if (this.slideIndex < 0) {
      if (this.noLoop) {
        this.slideIndex -= indexDirection;
        willChange = false;
        this.hideLeftArrow = true;
      } else {
        this.slideIndex = this.slides.length - 1;
      }
    } else if (this.slideIndex >= this.slides.length) {
      if (this.noLoop) {
        this.slideIndex -= indexDirection;
        willChange = false;
        this.hideRightArrow = true;
      } else {
        this.slideIndex = 0;
      }
    }

    if (willChange) {
      this.onIndexChanged.emit(this.slideIndex);
    }

    return willChange;
  }

  /**
   * @description This function handles the variables to move the CSS classes around accordingly.
   *              In order to correctly handle animations, the new slide as well as the slides to
   *              the left and right are assigned classes.
   */
  private slideLeft(oldIndex: number, isSwipe?: boolean): void {
    if (isSwipe === true) {
      this.onSwipeLeft.emit(this.slideIndex);
    } else {
      this.onSlideLeft.emit(this.slideIndex);
    }

    this.slides[this.getLeftSideIndex(oldIndex)].leftSide = false;
    this.slides[oldIndex].leftSide = true;
    this.slides[oldIndex].action = 'slideOutLeft';
    this.slides[this.slideIndex].rightSide = false;
    this.slides[this.getRightSideIndex()].rightSide = true;
    this.slides[this.slideIndex].action = 'slideInRight';
  }

  /**
   * @description This function handles the variables to move the CSS classes around accordingly.
   *              In order to correctly handle animations, the new slide as well as the slides to
   *              the left and right are assigned classes.
   */
  private slideRight(oldIndex: number, isSwipe?: boolean): void {
    if (isSwipe === true) {
      this.onSwipeRight.emit(this.slideIndex);
    } else {
      this.onSlideRight.emit(this.slideIndex);
    }

    this.slides[this.getRightSideIndex(oldIndex)].rightSide = false;
    this.slides[oldIndex].rightSide = true;
    this.slides[oldIndex].action = 'slideOutRight';
    this.slides[this.slideIndex].leftSide = false;
    this.slides[this.getLeftSideIndex()].leftSide = true;
    this.slides[this.slideIndex].action = 'slideInLeft';
  }

  /**
   * @description Check to make sure slide images have been set or haven't changed
   */
  private setSlides(): void {
    if (this.imageUrls) {
      if (this.checkCache() || this.initial === true) {
        this.initial = false;
        this.urlCache = Array.from(this.imageUrls);
        this.slides = [];

        if (this.lazyLoad === true) {
          this.buildLazyLoadSlideArray();
        } else {
          this.buildSlideArray();
        }
        this.cdRef.detectChanges();
      }
    }
  }

  /**
   * @description create the slides without background urls, which will be added in
   *              for the "lazy load," then load only the first slide
   */
  private buildLazyLoadSlideArray(): void {
    for (const image of this.imageUrls) {
      this.slides.push({
        image:
          typeof image === 'string'
            ? { url: null }
            : { url: null, href: image.href || '' },
        action: '',
        leftSide: false,
        rightSide: false,
        selected: false,
        loaded: false
      });
    }
    if (this.slideIndex === -1) {
      this.slideIndex = 0;
    }
    this.slides[this.slideIndex].selected = true;
    this.loadFirstSlide();
    this.onIndexChanged.emit(this.slideIndex);
  }

  /**
   * @description create the slides with background urls all at once
   */
  private buildSlideArray(): void {
    for (const image of this.imageUrls) {
      this.slides.push({
        image: typeof image === 'string' ? { url: image } : image,
        action: '',
        leftSide: false,
        rightSide: false,
        selected: false,
        loaded: true
      });
    }
    if (this.slideIndex === -1) {
      this.slideIndex = 0;
    }
    this.slides[this.slideIndex].selected = true;
    this.onIndexChanged.emit(this.slideIndex);
  }

  /**
   * @description load the first slide image if lazy loading
   *              this takes server side and browser side into account
   */
  private loadFirstSlide(): void {
    const tmpIndex = this.slideIndex;
    const tmpImage = this.imageUrls[tmpIndex];

    // if server side, we don't need to worry about the rest of the slides
    if (isPlatformServer(this.platformId)) {
      this.slides[tmpIndex].image =
        typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage;
      this.slides[tmpIndex].loaded = true;
      this.transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
    } else {
      const firstSlideFromTransferState = this.transferState.get(
        FIRST_SLIDE_KEY,
        null as any
      );
      // if the first slide didn't finish loading on the server side, we need to load it
      if (firstSlideFromTransferState === null) {
        const loadImage = new Image();
        loadImage.src = typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
        loadImage.addEventListener('load', () => {
          this.slides[tmpIndex].image =
            typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage;
          this.slides[tmpIndex].loaded = true;
          this.onImageLazyLoad.emit(this.slides[tmpIndex]);
          this.cdRef.detectChanges();
        });
      } else {
        this.slides[tmpIndex] = firstSlideFromTransferState;
        this.transferState.remove(FIRST_SLIDE_KEY);
      }
    }
  }

  /**
   * @description if lazy loading in browser, start loading remaining slides
   * @todo: figure out how to not show the spinner if images are loading fast enough
   */
  private loadRemainingSlides(): void {
    for (let i = 0; i < this.slides.length; i++) {
      if (!this.slides[i].loaded) {
        // tslint:disable-next-line
        new Promise(resolve => {
          const tmpImage = this.imageUrls[i];
          const loadImage = new Image();
          loadImage.addEventListener('load', () => {
            this.slides[i].image =
              typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage;
            this.slides[i].loaded = true;
            this.cdRef.detectChanges();
            this.onImageLazyLoad.emit(this.slides[i]);
            resolve(null);
          });
          loadImage.src =
            typeof tmpImage === 'string' ? tmpImage : tmpImage.url;
        });
      }
    }
  }

  /**
   * @description Start or stop autoPlay, don't do it at all server side
   */
  private handleAutoPlay(stopAutoPlay?: boolean): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    if (stopAutoPlay === true || this.autoPlay === false) {
      if (this.autoplayIntervalId) {
        this.ngZone.runOutsideAngular(() =>
          clearInterval(this.autoplayIntervalId)
        );
        this.autoplayIntervalId = null;
      }
    } else if (!this.autoplayIntervalId) {
      this.ngZone.runOutsideAngular(() => {
        this.autoplayIntervalId = setInterval(() => {
          if (
            !this.autoPlayWaitForLazyLoad ||
            (this.autoPlayWaitForLazyLoad &&
              this.slides[this.slideIndex] &&
              this.slides[this.slideIndex].loaded)
          ) {
            this.ngZone.run(() => this.slide(1));
          }
        }, this.autoPlayInterval);
      });
    }
  }

  /**
   * @description Keep the styles up to date with the input
   */
  private setStyles(): void {
    if (this.fullscreen) {
      this.renderer.setStyle(this.container.nativeElement, 'height', '100%');
      // Would be nice to make it configurable
      this.renderer.setStyle(
        this.container.nativeElement,
        'background-color',
        'white'
      );
    } else {
      // Would be nice to make it configurable
      this.renderer.removeStyle(
        this.container.nativeElement,
        'background-color'
      );
      if (this.height) {
        this.renderer.setStyle(
          this.container.nativeElement,
          'height',
          this.height
        );
      }

      if (this.minHeight) {
        this.renderer.setStyle(
          this.container.nativeElement,
          'min-height',
          this.minHeight
        );
      }
    }
    if (this.arrowSize) {
      this.renderer.setStyle(
        this.prevArrow.nativeElement,
        'height',
        this.arrowSize
      );
      this.renderer.setStyle(
        this.prevArrow.nativeElement,
        'width',
        this.arrowSize
      );
      this.renderer.setStyle(
        this.nextArrow.nativeElement,
        'height',
        this.arrowSize
      );
      this.renderer.setStyle(
        this.nextArrow.nativeElement,
        'width',
        this.arrowSize
      );
    }
  }

  /**
   * @description compare image array to the cache, returns false if no changes
   */
  private checkCache(): boolean {
    return !(
      this.urlCache.length === this.imageUrls.length &&
      this.urlCache.every(
        (cacheElement, i) => cacheElement === this.imageUrls[i]
      )
    );
  }

  /**
   * @description get the index for the slide to the left of the new slide
   */
  private getLeftSideIndex(i?: number): number {
    if (i === undefined) {
      i = this.slideIndex;
    }

    if (--i < 0) {
      i = this.slides.length - 1;
    }

    return i;
  }

  /**
   * @description get the index for the slide to the right of the new slide
   */
  private getRightSideIndex(i?: number): number {
    if (i === undefined) {
      i = this.slideIndex;
    }

    if (++i >= this.slides.length) {
      i = 0;
    }

    return i;
  }

  /**
   * @description a trackBy function for the ngFor loops
   */
  trackByFn(index: number, slide: ISlide): any {
    return slide.image;
  }

  /**
   * @description don't let click events fire, handle in pointer service instead
   */
  handleClick(event) {
    event.preventDefault();
  }
}
