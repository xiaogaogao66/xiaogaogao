import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Url = 'angulardemo/login';
  constructor(private http: HttpClient,) { }
  login(user:User): Observable<any> {
    const url = `${this.Url}`;
    return this.http.post(url, user);
  }
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

