import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

constructor(private httpClient: HttpClient) {
}
  sendEmail(contact: Contact) {
    return this.httpClient.post('https://www.enformed.io/m7ieeus6', contact).toPromise();
  }
}
