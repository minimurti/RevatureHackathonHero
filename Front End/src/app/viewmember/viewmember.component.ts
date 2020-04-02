import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ViewmemberService} from '../services/viewmember.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.css']
})
export class ViewmemberComponent implements OnInit {

  userList: User[];

  project_id: number;

  constructor(private viewmemberService: ViewmemberService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.project_id = this.route.snapshot.params.id;
    console.log(this.project_id);
    this.viewmemberService.listMembers(this.project_id).subscribe(userList => this.userList  = userList);
    console.log(this.userList);
  }

  return(){
    this.router.navigate(['viewp']);
  }

}
