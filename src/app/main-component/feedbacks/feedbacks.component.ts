import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})

export class FeedbacksComponent {
  feedbacks = [
    {
      name: 'John Smith',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Jane Doe', 
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    },
    {
      name: 'Mike Johnson',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    }
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