import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  private readonly URL = environment.endpoint + 'alluser';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  userList: User[];

  public listAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  constructor(private http: HttpClient) {}
}
