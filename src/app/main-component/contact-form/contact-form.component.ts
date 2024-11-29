import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, FormsModule],
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
}
