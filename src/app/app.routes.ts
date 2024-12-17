import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './shared/footer/legal-notice/legal-notice.component';
import { HeadComponent } from './head/head.component';
import { PrivacyPolicyComponent } from './main-component/contact-form/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HeadComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
