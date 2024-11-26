import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectDetailComponent],
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
export class PortfolioComponent {
  activeProject: any = null;
  selectedProject: any = null;

  projects = [
    {
      name: 'Join',
      image: 'assets/img/projects/game-preview.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'A task management system inspired by the Kanban methodology...',
      githubLink: 'https://github.com/StephanieWetzel/Join_group',
      liveLink: 'https://fuad-hussen.developerakademie.net/join/index.html'
    },
    {
      name: 'El Pollo Loco',
      image: 'assets/img/projects/game1-preview.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'A simple game where you have to avoid obstacles...',
      githubLink: 'https://github.com/FuadHussen/el_pollo_loco',
      liveLink: 'https://fuad-hussen.developerakademie.net/el_pollo_loco/index.html'
    },
    {
      name: 'Ring of fire',
      image: 'assets/img/projects/game2-preview.png',
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
}
