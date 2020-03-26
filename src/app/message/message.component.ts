import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../message-list/email';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Email;

  constructor() {}

  ngOnInit(): void {
    this.message.read = false;
  }
}
