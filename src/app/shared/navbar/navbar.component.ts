import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isEnglish = true;
  isLegalNotice = false;
  readonly images = {
    enSelected: 'assets/img/design/en.png',
    enHover: 'assets/img/design/en-hover.png',
    deSelected: 'assets/img/design/de.png',
    deHover: 'assets/img/design/de-hover.png'
  };

  isMenuHovered = false;

  assets = {
    img: {
      design: {
        'burger-menu-hover.png': 'assets/img/design/burger-menu-hover.png',
        'burger-menu.png': 'assets/img/design/burger-menu.png'
      }
    }
  };

  isMenuOpen = false;


  constructor(private translate: TranslateService, private elementRef: ElementRef, private router: Router) {
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

  scrollToSection(sectionId: string) {
    if (this.router.url === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (this.router.url === '/privacy-policy' || this.router.url === '/legal-notice') {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 0);
          }
        }, 0);
      });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/legal-notice' || event.url === '/privacy-policy') {
          setTimeout(() => {
            AOS.init({ disable: true });
          }, 0);
        } else {
          AOS.init({ disable: false });
        }
      }
    });
  }
}
