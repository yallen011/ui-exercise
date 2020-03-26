import { Component, OnInit } from '@angular/core';
import { EmailService } from '../message-list/email.service';
import { Email } from '../message-list/email';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  message: Email;
  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = this.emailService.getMessage(
      this.route.snapshot.params['id']
    );
  }
}
