import { Component, OnInit } from '@angular/core';
import { loginUser } from '../models/loginUser';
import { LoginService } from '../services/login.service';
//import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  success = '';

  newheaders: string[];

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router) { }

  login(username: string, password: string): void {

    const newloginUser = new loginUser(
      username,
      password
    );

    this.loginService.login(newloginUser as loginUser)
     .subscribe(user => {

        this.user = user;
        console.log(this.user);
        localStorage.setItem('username', user.username);
        console.log(localStorage.getItem('username'));
        this.router.navigate(['landing']);

     }, err => {
       alert('Wrong credentials');
     });

  }

  ngOnInit() {}

}