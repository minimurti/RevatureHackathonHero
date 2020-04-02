import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ViewmemberService {

  private readonly URL = environment.endpoint + `/user/project`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  userList: User[];

  public listMembers(project_id: number): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/?project_id=' + project_id);
  }

  constructor(private http: HttpClient) {}
}
