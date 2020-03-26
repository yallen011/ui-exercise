import { Component, OnInit } from '@angular/core';
import emails from '../../assets/emails.json';
import { Email } from './email';
import { EmailService } from './email.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages = this.emailService.getMessages();

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}
}
