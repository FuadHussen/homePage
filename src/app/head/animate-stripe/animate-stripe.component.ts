import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animate-stripe',
  standalone: true,
  template: `
    <div class="stripe-container">
      <div class="stripe-content" #content>
        <span>Frontend Developer</span>
        <div class="dot"></div>
        <span>Based in Stuttgart</span>
        <div class="dot"></div>
        <span>Open to work</span>
        <div class="dot"></div>
        <span>Available for remote work</span>
        <div class="dot"></div>
      </div>
    </div>
  `,
  styleUrls: ['./animate-stripe.component.scss']
})
export class AnimateStripeComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const content = this.content.nativeElement;
    const contentWidth = content.scrollWidth;

    const clone = content.innerHTML;
    content.innerHTML += clone;

    const animationDuration = contentWidth / 30;
    content.style.animationDuration = `${animationDuration}s`;
  }
}
