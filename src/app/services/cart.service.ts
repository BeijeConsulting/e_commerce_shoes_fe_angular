import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { PROPERTIES } from "src/assets/utils/properties";

@Injectable({
  providedIn: "root",
})
export class CartService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  authHttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQYW9sbzFAZ21haWwuY29tIiwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl0sImlhdCI6MTY4NDgyNzQ4NSwiZXhwIjoxNjg0ODMxMDg1fQ.MAgggChO0pb9IuUmmAbl2jVFwhGFqDaAwFi5iPS7Y78",
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

  getCartList(): Observable<any> {
    return this.http
      .get(PROPERTIES.BASE_URL + "/shoppingcart", this.authHttpOptions)
      .pipe(catchError(this.handleError<any>("getProducts")));
  }

  getCartListDetail(detailsId?: number): Observable<any> {
    return this.http
      .get(
        PROPERTIES.BASE_URL + `/shoppingcart/${detailsId}`,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("getProducts")));
  }

  addItemToCartList(item?: object): Observable<any> {
    return this.http
      .post(
        PROPERTIES.BASE_URL + `/shoppingcart/add, ${item}`,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("getProducts")));
  }

  addListItemToCartList(items?: object): Observable<any> {
    return this.http
      .post(
        PROPERTIES.BASE_URL + `/shoppingcart/additemsList, ${items}`,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("getProducts")));
  }

  updateItemToCartList(itemId?: number, newQuantity?: number): Observable<any> {
    return this.http
      .put(
        PROPERTIES.BASE_URL +
          `/shoppingcart/update/ + ${itemId} + ?new_quantity= + ${newQuantity}`,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("getProducts")));
  }

  deleteCartItem(id?: number): Observable<any> {
    return this.http
      .delete(
        PROPERTIES.BASE_URL + `/shoppingcart/delete, ${id}`,
        this.authHttpOptions
      )
      .pipe(catchError(this.handleError<any>("getProducts")));
  }
}
