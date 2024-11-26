import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
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

  projects = [
    {
      name: 'Join',
      image: 'assets/img/projects/join.png',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'El Pollo Loco',
      image: 'assets/img/projects/el-pollo-loco.png',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Ring of fire',
      image: 'assets/img/projects/ring-of-fire.png',
      skills: ['Angular', 'Firebase', 'TypeScript', 'SCSS']
    }
  ];
}
