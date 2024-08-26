import { CommonModule } from '@angular/common';
import { Component , HostListener, OnInit, ElementRef, Renderer2 ,AfterViewInit,} from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent{

  private headerElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.headerElement = this.el.nativeElement.querySelector('header.main-header');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (window.scrollY > 0) {
      this.renderer.addClass(this.headerElement, 'asscrollstart');
    } else {
      this.renderer.removeClass(this.headerElement, 'asscrollstart');
    }
  }

  
}