import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutNetoyedComponent } from './components/about-netoyed/about-netoyed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent,MainFooterComponent,HeroSectionComponent,AboutNetoyedComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netoyed-website';
}
