import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from '../models/message';
import { CreatemService } from '../services/createm.service';
import { DisplayMessage } from '../models/displaymessage';
import { ViewmService } from '../services/viewm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Operator, interval } from 'rxjs';
import {Location} from '@angular/common';

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})

export class ChatComponent implements OnInit {

  constructor(private viewmService: ViewmService,
              private createmService: CreatemService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  @Input()
  messageList: DisplayMessage[];

  interval: any;

  message_id = 1;

  project_id: number;

  username = localStorage.getItem('username');

  nd = new Date();

  time = this.nd.getHours() + ":" + this.nd.getMinutes();

  alive = true;

  // characterCount: number;
  // current: number;
  // maximum: number;
  // theCount: number;
  // currentcolor: string;
  // maxcolor: string;

  // onKey(event: any) {

  //   this.characterCount = event.target.val.length;

  //   /*This isn't entirely necessary, just playin around*/
  //   if (this.characterCount < 70) {
  //     this.currentcolor = '#666';
  //   }
  //   if (this.characterCount > 70 && this.characterCount < 90) {
  //     this.currentcolor = '#6d5555';
  //   }
  //   if (this.characterCount > 90 && this.characterCount < 100) {
  //     this.currentcolor = '#793535';
  //   }
  //   if (this.characterCount > 100 && this.characterCount < 120) {
  //     this.currentcolor = '#841c1c';
  //   }
  //   if (this.characterCount > 120 && this.characterCount < 139) {
  //     this.currentcolor = '#8f0001';
  //   }

  //   if (this.characterCount >= 140) {
  //     this.maxcolor = '#8f0001';
  //     this.currentcolor = '#8f0001';
  //   } else {
  //     this.maxcolor = '#666';
  //   }
  // }

  add(messageBody: string): void {

      const newMessage = new Message(
        this.message_id,
        messageBody,
        this.project_id,
        localStorage.getItem('username')
      );
      this.createmService.addMessage(newMessage as Message)
       .subscribe(response => {
        this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList  = messageList);
       });

      }

      return(){
        this._location.back();
        //this.router.navigate(['viewp']);
      }


  ngOnInit() {
    this.project_id = this.route.snapshot.params.id;
    this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList  = messageList);
    this.interval = setInterval(() => {
      this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList  = messageList);
    }, 1000);

  }

  ngOnDestroy() {
    this.alive = false; // switches your IntervalObservable off
  }

}
