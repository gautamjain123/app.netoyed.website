import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonials = [
    {
      text: '"Netoyeds UX4G team has helped us transform user experience and perception of government assets positively. We have collaborated on multiple projects and workshops, and Netoyed has never given us a chance to complain. We appreciate all the hard work you have put into UX4G"',
      name: 'Debabrata Nayak',
      designation: 'Chief Technology Officer, Digital India Corporation',
      logo: '../../../assets/logo/dilogo.png',
      image: '../../../assets/images/nayak-sir.png',
    },
    {
      text: '"I want to thank the Netoyed team for their great efforts and great work. 61/62 of our graduating recruits signed up for the research through the app Netoyed built and were able to navigate easily. We achieved this major success in just 1 hour and we are grateful to Netoyed for making this happen!" ',
      name: 'Stefanos N. Kales',
      designation: 'MD, MPH, FACP, FACOEM | Professor of Medicine, Harvard Medical School',
      logo: '../../../assets/logo/harvard1.png',
      image: '../../../assets/images/harvard.png',
    },
    {
      text: '“The Netoyed team has helped us reduce our client escalation rate significantly. The engineers are really dedicated and proactive in managing our off-days and after-hours. We have implemented ticket management and note-taking processes that Netoyed brought in to our business hours process, the way the notes are maintained are better than what I have seen in my 15-year career."',
      name: 'Kaley Kaley DiNucci',
      designation: 'Director, NOC Services Solutions at CSPi Technologies',
      logo: '../../../assets/logo/cspilogo.png',
      image: '../../../assets/images/cspi.png',
    },
    {
      text: '“I am thankful to the Netoyed team for their brilliant work on the DAVOS Event. They were very receptive to our directions and feedback and truly dedicated to consistently improving while sticking to strict deadlines. They rose to the occasion with true commitment and responsibility. Kudos and a big thanks to Meghana, Rohit, Sagar, Ashish, Abhimanyu, Kartik and Renuka, each one of whom worked with utmost sincerity and commitment.”',
      name: 'Ranjana Jetely',
      designation: 'Chief Communications Officer, Invest India',
      logo: '../../../assets/logo/investindialogo.png',
      image: '../../../assets/images/investindia.png',
    },
    // Add more testimonials here
  ];

  currentIndex = 2;
  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  previousTranslate = 0;

  getCardClass(index: number): string {
    if (index === this.currentIndex) {
      return 'active';
    } else if (index === (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length) {
      return 'left-neighbor';
    } else if (index === (this.currentIndex + 1) % this.testimonials.length) {
      return 'right-neighbor';
    } else if (index === (this.currentIndex - 2 + this.testimonials.length) % this.testimonials.length) {
      return 'second-left-neighbor';
    } else if (index === (this.currentIndex + 2) % this.testimonials.length) {
      return 'second-right-neighbor';
    } else {
      return 'inactive';
    }
  }

  moveLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  moveRight() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX;
  }

  endDrag() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.previousTranslate;

    if (movedBy < -100) {
      this.moveRight();
    } else if (movedBy > 100) {
      this.moveLeft();
    }

    this.currentTranslate = 0;
    this.previousTranslate = 0;
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    this.currentTranslate = event.pageX - this.startX;
  }

}
