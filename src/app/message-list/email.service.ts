import { Injectable } from '@angular/core';
import emails from '../../assets/emails.json';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private messages: Email[] = emails.messages;
  constructor() {
    this.messages = this.messages.map(message => {
      const names = message.sender.split('@')[0].split('.');
      message.senderName = names[0] + ' ' + names[1];
      return message;
    });

    console.log(this.messages);
  }

  getMessages() {
    return this.messages;
  }

  getMessage(id: string) {
    return this.messages.find(message => message.id === id);
  }
}
