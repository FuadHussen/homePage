import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


interface FormField {
  type: string;
  label: string;
  placeholder: string;
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
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
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
      label: "What's your name?",
      placeholder: 'Your name goes here'
    },
    {
      type: 'email',
      label: "What's your email?",
      placeholder: 'youremail@email.com'
    },
    {
      type: 'textarea',
      label: 'How can I help you?',
      placeholder: 'Hello Fuad, I am interested in...'
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
    if (ngForm.submitted && ngForm.form.valid) {
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
}