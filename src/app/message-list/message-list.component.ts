import { Component, OnInit } from '@angular/core';
import emails from '../../assets/emails.json';
import { Email } from './email';
import { EmailService } from './email.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages = this.emailService.getMessages();
  selectedTag: string;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.selectedTag = fragment;
    });
  }
}
