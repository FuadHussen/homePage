import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, MainComponentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'homePage';
  showMainComponent = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupBrowserSpecificTasks();
      AOS.init({
        duration: 750,
        easing: 'ease-in-out',
        once: true,
      });
    }
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showMainComponent = event.url !== '/legal-notice' && event.url !== '/privacy-policy';
    });
  }

  private setupBrowserSpecificTasks() {
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      });
    });
  }
}
