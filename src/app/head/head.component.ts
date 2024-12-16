import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AnimateStripeComponent } from './animate-stripe/animate-stripe.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [NavbarComponent, CommonModule, AnimateStripeComponent, TranslateModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  arrowMiddle = 'assets/img/design/pfeil.svg';
  github = 'assets/img/design/github.png';
  mail = 'assets/img/design/mail.png';
  gitHubHover = 'assets/img/design/github-hover.png';
  mailHover = 'assets/img/design/mail-hover.png';
  isGithubHovered = false;
  isMailHovered = false;

  scrollToPortfolio() {
    const portfolioSection = document.getElementById('projects');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }

}
