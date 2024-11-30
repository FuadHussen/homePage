import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [AboutMeComponent, SkillSetComponent, PortfolioComponent, FeedbacksComponent, ContactFormComponent, FooterComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
