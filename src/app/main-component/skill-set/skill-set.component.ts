import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

interface Icon {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit {

  icons = {
    html: 'assets/img/design/html.png',
    css: 'assets/img/design/css.png',
    js: 'assets/img/design/js.png',
    materialDesign: 'assets/img/design/material-design.png',
    ts: 'assets/img/design/ts.png',
    angular: 'assets/img/design/angular.png',
    firebase: 'assets/img/design/firebase.png',
    git: 'assets/img/design/git.png',
    restApi: 'assets/img/design/rest-api.png',
    scrum: 'assets/img/design/scrum.png',
    growthMindset: 'assets/img/design/growth-mindset.png'
  }

  iconList: Icon[] = [
    { src: this.icons.html, alt: 'html' },
    { src: this.icons.css, alt: 'css' },
    { src: this.icons.js, alt: 'js' },
    { src: this.icons.materialDesign, alt: 'materialDesign' },
    { src: this.icons.ts, alt: 'ts' },
    { src: this.icons.angular, alt: 'angular' },
    { src: this.icons.firebase, alt: 'firebase' },
    { src: this.icons.git, alt: 'git' },
    { src: this.icons.restApi, alt: 'restApi' },
    { src: this.icons.scrum, alt: 'scrum' },
    { src: this.icons.growthMindset, alt: 'growthMindset' }
  ];

  iconSpan: { [key: string]: string } = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    materialDesign: 'Material Design',
    ts: 'TypeScript',
    angular: 'Angular',
    firebase: 'Firebase',
    git: 'Git',
    restApi: 'Rest-API',
    scrum: 'Scrum',
    growthMindset: 'Growth Mindset'
  }

  getIconText(alt: string): string {
    return this.iconSpan[alt] || '';
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    AOS.init();
  }
}
