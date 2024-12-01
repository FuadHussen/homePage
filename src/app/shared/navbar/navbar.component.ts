import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  isEnglish = true;

  readonly images = {
    enSelected: 'assets/img/design/en.png',
    enHover: 'assets/img/design/en-hover.png',
    deSelected: 'assets/img/design/de.png',
    deHover: 'assets/img/design/de-hover.png'
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.onLangChange.subscribe(() => {
      this.isEnglish = this.translate.currentLang === 'en';
    });
  }

  toggleLanguage() {
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
  }
}
