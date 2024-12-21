import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NavbarComponent } from './../../../shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, NavbarComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
