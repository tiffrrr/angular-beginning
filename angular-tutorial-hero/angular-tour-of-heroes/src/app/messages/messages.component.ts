import { Component, OnInit } from '@angular/core';
// 注入service
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
// 這個就要是public,因為要在html中用。
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
