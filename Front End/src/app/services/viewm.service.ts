import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { DisplayMessage } from '../models/displaymessage';

@Injectable({
  providedIn: 'root'
})
export class ViewmService {

  private readonly URL = environment.endpoint + `/message/project`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  messageList: DisplayMessage[];

  public listMessages(project_id: number): Observable<DisplayMessage[]> {
    return this.http.get<DisplayMessage[]>(this.URL + '/?project_id=' + project_id);
  }

  constructor(private http: HttpClient) {}
}
