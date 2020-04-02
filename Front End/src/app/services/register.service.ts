import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly URL = environment.endpoint + 'register'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  user: User;

  public addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.URL, user);
  }

  constructor(private http: HttpClient) {}

}