import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RegisterService} from '../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private route: ActivatedRoute, private router: Router) { }

  add(username: string, password:string, firstName: string, lastName: string,
    email: string, dateOfBirth: string): void {

      const newUser = new User(
        username,
        password,
        firstName,
        lastName,
        email,
        dateOfBirth,

      );

      
      this.registerService.addUser(newUser as User)
       .subscribe(response => {
        this.router.navigate(['home']);
       }); 


    }

  ngOnInit() {
  }

  return(){
    this.router.navigate(['home']);
  }

}
