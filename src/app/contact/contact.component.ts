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

  disableForm() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.textField.nativeElement.disabled = true;
    this.button.nativeElement.disabled = true;
  }

  enableForm() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.textField.nativeElement.disabled = false;
    this.button.nativeElement.disabled = false;
  }

  async sendMail() {
    this.disableForm();
    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.textField.nativeElement.value);
    //senden
    await fetch('https://alexandrevermeersch.com/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });
    this.enableForm();
    window.location.href = './index.html';
    alert('Email was send successfully!');
  }
}
