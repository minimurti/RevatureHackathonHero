import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ViewpService {

  private readonly URL = environment.endpoint + `/project`; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  projectList: Project[];

  public listProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.URL);
  }

  constructor(private http: HttpClient) {}
}
