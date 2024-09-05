import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [],
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit, AfterViewInit {

  @ViewChild('img', { static: false }) img!: ElementRef<HTMLImageElement>;
  @ViewChild('heading', { static: false }) heading!: ElementRef<HTMLHeadingElement>;
  private imgWidth!: number;
  private imgHeight!: number;
  private tl!: gsap.core.Timeline;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Any necessary initialization can be added here
  }

  ngAfterViewInit(): void {
    this.initAnimations();
    this.init();
    this.resize();
  }

  private initAnimations(): void {
    gsap.set(this.img.nativeElement, {
      scale: 6,
      xPercent: -50,
      yPercent: -50
    });

    // Remove xPercent and yPercent to avoid translation
    gsap.set(this.heading.nativeElement, {
      scale: 3,
      transformOrigin: 'center center'
    });

    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.elementRef.nativeElement.querySelector('.image-unmask'),
        pin: true,
        start: 'top top',
        end: '+=2500',
        scrub: 0.2,
      },
      defaults: {
        duration: 1
      }
    })
    .to(this.img.nativeElement, {
      scale: 1,
      opacity: 1,
    }, 0)
    .to(this.heading.nativeElement, {
      scale: 1,
      opacity: 1,
    }, 0);
  }

  private init(): void {
    this.imgWidth = this.img.nativeElement.naturalWidth;
    this.imgHeight = this.img.nativeElement.naturalHeight;
    this.resize();
  }

  @HostListener('window:resize')
  resize(): void {
    if (!this.imgWidth || !this.imgHeight) return;

    this.tl.progress(0);
    
    const rect = this.elementRef.nativeElement.querySelector('.image-unmask').getBoundingClientRect();
    const rectWidth = rect.width;
    const rectHeight = rect.height;

    const rx = rectWidth / this.imgWidth;
    const ry = rectHeight / this.imgHeight;

    const ratio = Math.max(rx, ry);
    
    const width = this.imgWidth * ratio;
    const height = this.imgHeight * ratio;
    
    gsap.set(this.img.nativeElement, { width, height });
    
    this.tl.invalidate();
    ScrollTrigger.refresh();
  }
}
