import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatemService {

  private readonly URL = environment.endpoint + 'message';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  message: Message;

  public addMessage(message: Message): Observable<Message> {
    console.log(message);
    return this.http.post<Message>(this.URL + '/?message_id=' + message.message_id +
    '&messageBody=' + message.messageBody + '&project_id=' + message.project_id +
    '&username=' + message.username, {});
  }

  constructor(private http: HttpClient) {}
}
