import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('125ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('125ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  activeProject: any = null;
  selectedProject: any = null;

  projects = [
    {
      name: 'Join',
      image: 'assets/img/projects/game-preview.png',
      responsiveImage: 'assets/img/projects/join.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      githubLink: 'https://github.com/FuadHussen/Join_group',
      liveLink: 'https://fuad-hussen.developerakademie.net/Join/login_index.html'
    },
    {
      name: 'El Pollo Loco',
      image: 'assets/img/projects/game1-preview.png',
      responsiveImage: 'assets/img/projects/el-pollo-loco.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubLink: 'https://github.com/FuadHussen/el_pollo_loco',
      liveLink: 'https://fuad-hussen.developerakademie.net/el_pollo_loco/index.html'
    },
    {
      name: 'Ring of fire',
      image: 'assets/img/projects/game2-preview.png',
      responsiveImage: 'assets/img/projects/ring-of-fire.png',
      skills: ['Angular', 'Firebase', 'TypeScript', 'CSS'],
      languages: ['angular', 'firebase', 'ts', 'css'],
      description: 'A multiplayer game where players have to avoid obstacles...',
      githubLink: 'https://github.com/FuadHussen/ringoffire',
      liveLink: 'https://fuad-hussen.developerakademie.net/angular-projects/ringoffire/#/'
    }
  ];

  openProjectDetail(project: any) {
    this.selectedProject = project;
  }

  closeProjectDetail() {
    this.selectedProject = null;
  }

  showNextProject() {
    const currentIndex = this.projects.findIndex(p => p === this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  get selectedProjectIndex(): number {
    return this.projects.findIndex(p => p === this.selectedProject);
  }

  ngOnInit() {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
  }
}
