import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart-header",
  templateUrl: "./cart-header.component.html",
  styleUrls: ["./cart-header.component.scss"],
})
export class CartHeaderComponent {
  constructor(private router: Router) {}

  goToCheckout() {
    this.router.navigate(["checkout"]);
  }
}
