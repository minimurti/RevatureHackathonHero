import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Message } from '../models/message';
let ChatComponent = class ChatComponent {
    constructor(viewmService, createmService, route, router, _location) {
        this.viewmService = viewmService;
        this.createmService = createmService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.message_id = 1;
        this.username = localStorage.getItem('username');
        this.nd = new Date();
        this.time = this.nd.getHours() + ":" + this.nd.getMinutes();
        this.alive = true;
    }
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
    add(messageBody) {
        const newMessage = new Message(this.message_id, messageBody, this.project_id, localStorage.getItem('username'));
        this.createmService.addMessage(newMessage)
            .subscribe(response => {
            this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList = messageList);
        });
    }
    return() {
        this._location.back();
        //this.router.navigate(['viewp']);
    }
    ngOnInit() {
        this.project_id = this.route.snapshot.params.id;
        this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList = messageList);
        this.interval = setInterval(() => {
            this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList = messageList);
        }, 1000);
    }
    ngOnDestroy() {
        this.alive = false; // switches your IntervalObservable off
    }
};
tslib_1.__decorate([
    Input()
], ChatComponent.prototype, "messageList", void 0);
ChatComponent = tslib_1.__decorate([
    Component({
        selector: 'app-chat',
        templateUrl: 'chat.component.html',
        styleUrls: ['chat.component.css']
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map