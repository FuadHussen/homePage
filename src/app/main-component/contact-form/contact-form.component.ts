import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';

interface FormField {
  type: string;
  label: string;
}

interface CheckboxImages {
  unchecked: string;
  hover: string;
  checked: string;
  checkedHover: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TranslateModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  constructor(private router: Router) {}

  checkboxImages: CheckboxImages = {
    unchecked: 'assets/img/design/check-box-1.png',
    hover: 'assets/img/design/check-box-2.png',
    checked: 'assets/img/design/check-box-3.png',
    checkedHover: 'assets/img/design/check-box-4.png'
  };

  http = inject(HttpClient);

  formFields: FormField[] = [
    {
      type: 'text',
      label: "WHATS_YOUR_NAME"
    },
    {
      type: 'email',
      label: "WHATS_YOUR_EMAIL"
    },
    {
      type: 'textarea',
      label: 'HOW_CAN_I_HELP_YOU'
    }
  ];

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  post = {
    endPoint: 'https://fuad-hussen.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: false,
      observe: 'response' as 'response'
    }
  };

  privacyAccepted = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.privacyAccepted) {
      this.http.post(this.post.endPoint, this.contactData, this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          }
        });
    }
  }

  navigateToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}