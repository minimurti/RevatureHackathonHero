import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewaccService {

  private readonly URL = environment.endpoint + 'user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  user: User;

  public viewUser(username: string) {
    return this.http.get<User>(this.URL + '?username=' + username, {});
  }
  
  constructor(private http: HttpClient) {}
}
