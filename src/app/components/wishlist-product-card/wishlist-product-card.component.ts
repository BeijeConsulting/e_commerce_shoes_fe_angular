import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-wishlist-product-card",
  templateUrl: "./wishlist-product-card.component.html",
  styleUrls: ["./wishlist-product-card.component.scss"],
})
export class WishlistProductCardComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  goToProductDetail() {
    this.router.navigate([`scarpa/${this.product.id}`]);
    // console.log(this.product.id);
  }
}
