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
      name: 'Kunden und Verwaltungsprogramm',
      image: 'assets/img/projects/kunden-und-auftragsverwaltung.png',
      responsiveImage: 'assets/img/projects/kunden-und-auftragsverwaltung.png',
      skills: ['C#', 'SQLite', '.NET'],
      languages: ['csharp', 'sqlite', 'dotnet'],
      description: 'Ein umfassendes Kunden- und Verwaltungsprogramm, entwickelt mit C# und SQLite. Ermöglicht effizientes Kundenmanagement und Datenverwaltung mit einer benutzerfreundlichen Oberfläche.',
      githubLink: '',
      liveLink: '',
      downloadLink: 'assets/downloads/Kunden-und-verwaltungsprogramm.zip'
    },
    {
      name: 'Join',
      image: 'assets/img/projects/game-preview.png',
      responsiveImage: 'assets/img/projects/join.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      githubLink: 'https://github.com/FuadHussen/Join_group',
      liveLink: 'https://join.fuad-hussen.com/login_index.html'
    },
    {
      name: 'El Pollo Loco',
      image: 'assets/img/projects/game1-preview.png',
      responsiveImage: 'assets/img/projects/el-pollo-loco.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      languages: ['html', 'css', 'js'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubLink: 'https://github.com/FuadHussen/el_pollo_loco',
      liveLink: 'https://el-pollo-loco.fuad-hussen.com/index.html'
    },
    {
      name: 'Da Bubble',
      image: 'assets/img/projects/da-bubble.png',
      responsiveImage: 'assets/img/projects/da-bubble-bilder.png',
      skills: ['Angular', 'Firebase', 'TypeScript', 'CSS'],
      languages: ['angular', 'firebase', 'ts', 'css'],
      description: 'A modern chat messenger with real-time communication, built with Angular and Firebase. Features direct messaging, channels, and thread-based communication.',
      githubLink: 'https://github.com/FuadHussen/dabubble-393',
      liveLink: 'https://da-bubble.fuad-hussen.com/'
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
