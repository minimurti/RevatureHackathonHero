import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { CreatemService } from '../services/createm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createm',
  templateUrl: './createm.component.html',
  styleUrls: ['./createm.component.css']
})
export class CreatemComponent implements OnInit {

  constructor(private createmService: CreatemService,
              private route: ActivatedRoute,
              private router: Router) { }

  message_id = 1;

  project_id: number;

  add(messageBody: string): void {

      const newMessage = new Message(
        this.message_id,
        messageBody,
        this.project_id,
        localStorage.getItem('username')
      );
      this.createmService.addMessage(newMessage as Message)
       .subscribe();

      }

      return(){
        this.router.navigate(['viewp']);
      }


  ngOnInit() {

    this.project_id = this.route.snapshot.params['id'];

  }

}
