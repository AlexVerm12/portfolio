import { SlicePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let textField = this.textField.nativeElement;
    let button = this.button.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    textField.disabled = true;
    button.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', textField.value);
    //senden
    await fetch('https://alexandrevermeersch.com/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });

    nameField.disabled = false;
    emailField.disabled = false;
    textField.disabled = false;
    button.disabled = false;

    window.location.href = './index.html';
    alert('Email was send successfully!');
  }
}
