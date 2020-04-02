import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { ViewaccService } from '../services/viewacc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewacc',
  templateUrl: './viewacc.component.html',
  styleUrls: ['./viewacc.component.css']
})
export class ViewaccComponent implements OnInit {

  constructor(private viewaccService: ViewaccService,
              private route: ActivatedRoute, private router: Router) { }

  user: User;



  ngOnInit() {

      this.viewaccService.viewUser(localStorage.getItem('username')).subscribe(user => this.user = user);


  }

  return() {
    this.router.navigate(['landing']);
    //window.location.href = '/landing';
  }

}
