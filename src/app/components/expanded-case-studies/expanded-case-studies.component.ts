import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expanded-case-studies',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, CommonModule],
  templateUrl: './expanded-case-studies.component.html',
  styleUrls: ['./expanded-case-studies.component.scss']
})
export class ExpandedCaseStudiesComponent {
  tabsdata = [
    { id: 1, buttonname: 'All' },
    { id: 2, buttonname: 'Cloud & MSP' },
    { id: 3, buttonname: 'Development' },
    { id: 4, buttonname: 'Creative' },
    { id: 5, buttonname: 'Network & Security' }
  ];

  cardData = [
    { 
      id: 1, 
      category: 2, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 2, 
      category: 2, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 2, 
      category: 2, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 2, 
      category: 2, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 2, 
      category: 2, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 3, 
      category: 3, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 3, 
      category: 3, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 3, 
      category: 3, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 3, 
      category: 3, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 4, 
      category: 4, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 4, 
      category: 4, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 4, 
      category: 4, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 4, 
      category: 4, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 4, 
      category: 4, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/umaang-bg.png)'
    },
    { 
      id: 5, 
      category: 5, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 5, 
      category: 5, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 5, 
      category: 5, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 5, 
      category: 5, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    { 
      id: 5, 
      category: 5, 
      hover1: 'Digital India', 
      title: 'India’s first Design System for the Indian Government.', 
      hover2: 'UX Design. Development. Brand Identity',
      backgroundImage: 'url(../../../assets/images/wef-bg.png)'
    },
    // Add more card data as needed
  ];

  selectedTabId: number = 1; // Default to show all cards

  getFilteredCardData() {
    let filteredData;
    if (this.selectedTabId === 1) {
      // Show all cards if 'All' tab is selected
      filteredData = this.cardData;
    } else {
      // Filter cards based on selected category
      filteredData = this.cardData.filter(card => card.category === this.selectedTabId);
    }

    // Show only the first 4 cards
    return filteredData.slice(0, 4);
  }

  onTabSelect(id: number): void {
    this.selectedTabId = id;
  }

  isActive(tabId: number): boolean {
    return this.selectedTabId === tabId;
  }
}
