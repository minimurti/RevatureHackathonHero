import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatepService {

  private readonly URL = environment.endpoint + 'project';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  project: Project;

  public addProject(project: Project): Observable<Project> {
    console.log(project);
    return this.http.post<Project>(this.URL, project);
  }

  public addUserToProject(id: number, username: string) {
    return this.http.post<Project>(this.URL + '/user?' + 'id=' + id + '&username=' + username, {});
  }
  
  constructor(private http: HttpClient) {}
}
