import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

}
