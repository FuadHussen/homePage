import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  location = 'assets/img/design/location.png';
  head = 'assets/img/design/head.png';
  check = 'assets/img/design/check.png';

}