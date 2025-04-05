import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  id: number;
  name: string;
  description: string;
  languages: string[];
  skills: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  responsiveImage: string;
  downloadLink?: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
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

export class ProjectDetailComponent {
  @Input() project!: Project;
  @Input() projectIndex: number = 0;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  getFormattedNumber(): string {
    return (this.projectIndex + 1).toString().padStart(2, '0');
  }

  closeDetail() {
    this.close.emit();
  }

  nextProject() {
    this.next.emit();
  }
}
