import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutNetoyedComponent } from './components/about-netoyed/about-netoyed.component';
import { CaseStudiesComponent } from "./components/case-studies/case-studies.component";
import { ExpandedCaseStudiesComponent } from './components/expanded-case-studies/expanded-case-studies.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaqSectionComponent,TestimonialsComponent,MatTabsModule, RouterOutlet, MainHeaderComponent, MainFooterComponent, HeroSectionComponent, AboutNetoyedComponent, CommonModule, CaseStudiesComponent,ExpandedCaseStudiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netoyed-website';
}
