import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
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
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  closeDetail() {
    this.close.emit();
  }

  nextProject() {
    this.next.emit();
  }
}
