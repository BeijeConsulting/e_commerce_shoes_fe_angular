import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { PROPERTIES } from "src/assets/utils/properties";

@Injectable({
  providedIn: "root",
})
export class AuthServicesService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  authHttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW9sbzFAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl0sImlhdCI6MTY4NDc2NjkwNCwiZXhwIjoxNjg0NzcwNTA0fQ.5OIUrN0DjS_y6LKQAlV36yiiRh1g33mk9x2Rc6sxFyE",
    }),
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(credentials: any): Observable<any> {
    return this.http
      .post(PROPERTIES.BASE_URL + "/login", credentials, this.httpOptions)
      .pipe(catchError(this.handleError<any>("login")));
  }

  getUser() {
    return this.http.get(PROPERTIES.BASE_URL + "/user", this.authHttpOptions);
  }
}
