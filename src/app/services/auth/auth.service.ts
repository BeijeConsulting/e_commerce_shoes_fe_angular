import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import { UserLoginInterface } from "../../interfaces/UserLoginInterface";
import { StorageService } from "../storage/storage.service";
import { catchError } from "rxjs/operators";
import { PROPERTIES } from "src/assets/utils/properties";

@Injectable({
  providedIn: "root",
})
export class AuthServices {
  token: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.storageService.getStorage("token")
  );
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

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getHeaderOptions(isAuth: boolean = false): { headers: HttpHeaders } {
    if (isAuth) {
      return {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Acces-Control-Allow-Origin": "*",
          Authorization: `Bearer ${this.token.value}`,
        }),
      };
    } else {
      return {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Acces-Control-Allow-Origin": "*",
        }),
      };
    }
  }

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

  login(body: UserLoginInterface): Observable<any> {
    return this.http
      .post(PROPERTIES.BASE_URL + "/signin", body, this.getHeaderOptions())
      .pipe(catchError(this.handleError<any>("login")));
  }

  refreshToken(): Observable<any> {
    console.log("inizio refresh token");
    const refreshToken = this.storageService.getStorage("refreshToken");
    return this.http.post<any>(
      PROPERTIES.BASE_URL + "/refresh_token",
      {
        refreshToken: refreshToken,
      },
      this.getHeaderOptions()
    );
  }

  getUser() {
    return this.http.get(PROPERTIES.BASE_URL + "/user", this.authHttpOptions);
  }
}
