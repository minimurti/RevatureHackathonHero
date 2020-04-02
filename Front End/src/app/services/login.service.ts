import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { loginUser } from '../models/loginUser';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  user: User;

  private readonly URL = environment.endpoint + 'login';

//   const options = {
//     headers: headers,
//     observe: "response" as 'body', // to display the full response & as 'body' for type cast
//     responseType: "json"
// };

  public login(LoginUser: loginUser): Observable<User> {
    console.log(LoginUser);
    return this.http.post<User>(this.URL, LoginUser);
  }

}
