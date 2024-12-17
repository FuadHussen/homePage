import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements OnInit {
  location = 'assets/img/design/location.png';
  head = 'assets/img/design/head.png';
  check = 'assets/img/design/check.png';
  profile = 'assets/img/design/profile.png';
  ngOnInit() {
    AOS.init();
  }
}
