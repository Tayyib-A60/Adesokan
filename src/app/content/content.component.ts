import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { log } from 'util';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contact: FormGroup;
  constructor(private emailService: EmailService, private notifierService: NotifierService) { }

  ngOnInit() {
    this.initializeContactForm();
  }
  private initializeContactForm() {
    const name = '';
    const email = '';
    const message = '';
    this.contact =  new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      message: new FormControl(message)
    });
  }

  submitForm() {
    this.emailService.sendEmail(this.contact.value).then(res => {
    }, (err) => {
      this.notifierService.notify('success', `Thanks for your time, I'll be in touch.`);
        // this.notifierService.notify('error', `An unexpected error occured`);
      }).catch(err => {
        console.log(err);
      });
      this.initializeContactForm();
  }
  show() {
    this.notifierService.notify('success', `Thanks for your time, I'll be in touch.`);
  }
}
