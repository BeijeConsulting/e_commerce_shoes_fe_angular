import { Component, Input } from "@angular/core";

@Component({
  selector: "app-wishlist-product-card",
  templateUrl: "./wishlist-product-card.component.html",
  styleUrls: ["./wishlist-product-card.component.scss"],
})
export class WishlistProductCardComponent {
  @Input() product: any;
  constructor() {}
}
