import { Component, OnInit } from '@angular/core';
import { DisplayMessage } from '../models/displaymessage';
import { ViewmService } from '../services/viewm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewm',
  templateUrl: './viewm.component.html',
  styleUrls: ['./viewm.component.css']
})
export class ViewmComponent implements OnInit {

  messageList: DisplayMessage[];

  project_id: number;

  constructor(private viewmService: ViewmService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.project_id = this.route.snapshot.params.id;
    console.log(this.project_id);
    this.viewmService.listMessages(this.project_id).subscribe(messageList => this.messageList  = messageList);
    console.log(this.messageList);
  }

  return(){
    this.router.navigate(['viewp']);
    //window.location.href = '/viewp';
  }

}
