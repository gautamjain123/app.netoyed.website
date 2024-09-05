import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  buttonLabels: string[] = ['Starting a Project', 'Design', 'Development', 'Security', 'Pricing'];
  activeTab = 'Starting a Project'; // Default active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}
