import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, TranslateModule, NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private router: Router) {}

  goHome() {
    window.scrollTo(0, 0);
  }
}
