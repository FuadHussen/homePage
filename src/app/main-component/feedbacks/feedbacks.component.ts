import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})

export class FeedbacksComponent {
  feedbacks = [
    {},
    {},
    {}
  ];
  currentIndex = 1;
  cardWidth = 500;
  gap = 16;
  translateX = 0;
  isRightHovered = false;
  isLeftHovered = false;

  ngOnInit() {
    this.updateTranslateX();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
    this.updateTranslateX();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
    this.updateTranslateX();
  }

  updateTranslateX() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 935) {
      this.translateX = 0;
    } else {
      const cardWidth = document.querySelector('.feedback.active')?.clientWidth || this.cardWidth;
      const totalWidth = cardWidth + this.gap;
      switch (this.currentIndex) {
        case 0:
          this.translateX = totalWidth;
          break;
        case 1: 
          this.translateX = 0;
          break;
        case 2:
          this.translateX = -totalWidth;
          break;
      }
    }
  }
}