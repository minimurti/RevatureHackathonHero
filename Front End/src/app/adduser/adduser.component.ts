import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AdduserService } from '../services/adduser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatepService } from '../services/createp.service';
import { ViewmemberService} from '../services/viewmember.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userList: User[];

  project_id: number;

  constructor(private adduserService: AdduserService, private createpService: CreatepService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.project_id = this.route.snapshot.params.id;
    console.log(this.project_id);
    this.adduserService.listAll()
      .subscribe(userList => this.userList  = userList);
    console.log(this.userList);
  }

  addUser(username: string) {
    console.log("adding user...");
    this.createpService.addUserToProject(this.project_id, username)
    .subscribe(() => this.router.navigate(['viewp']));
  
  }

  return() {
    this.router.navigate(['viewp']);
  }

}
