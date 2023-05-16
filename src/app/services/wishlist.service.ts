import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { PROPERTIES } from "src/assets/utils/properties";

@Injectable({
  providedIn: "root",
})
export class WhishlistService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  authHttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW9sbzFAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl0sImlhdCI6MTY4NDIyNDA0MSwiZXhwIjoxNjg0MjI3NjQxfQ.RQqHHaoty2oFn1T5yGIqXqnzayRM8JBhsSn5f7MqQDo",
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

  getWishList(): Observable<any> {
    return this.http
      .get(PROPERTIES.BASE_URL + "/wishlist", this.authHttpOptions)
      .pipe(catchError(this.handleError<any>("getWishList")));
  }

  addWishList(obj: any): Observable<any> {
    return this.http
      .post(PROPERTIES.BASE_URL + "/wishlist/add", obj, this.authHttpOptions)
      .pipe(catchError(this.handleError<any>("addWishList")));
  }

  deleteWishList(id: any): Observable<any> {
    return this.http
      .delete(
        PROPERTIES.BASE_URL + "/wishlist/delete/" + id,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("deleteWishList")));
  }
}
