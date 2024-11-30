import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isEnglish = true;

  readonly images = {
    enSelected: 'assets/img/design/en.png',
    enHover: 'assets/img/design/en-hover.png',
    deSelected: 'assets/img/design/de.png',
    deHover: 'assets/img/design/de-hover.png'
  };

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }
}
