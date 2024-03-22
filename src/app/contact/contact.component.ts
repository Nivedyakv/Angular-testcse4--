import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = '';
  phoneNumber: string = '';
  reason: string = '';

  submitForm() {
    console.log('Form submitted!');
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phoneNumber);
    console.log('Reason for Contact:', this.reason);
  }
}
