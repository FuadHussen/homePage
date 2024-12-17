import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-animate-stripe',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './animate-stripe.component.html',
  styleUrls: ['./animate-stripe.component.scss']
})
export class AnimateStripeComponent {
  ngOnInit() {
    AOS.init();
  }
}
