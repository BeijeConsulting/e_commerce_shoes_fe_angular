import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit{
  isVisible: boolean = false;
  inputFocused: boolean = false;
  categories: Observable<any>;

  constructor(private productsService: ProductsService, private router: Router) {
    this.categories = this.productsService.getCategories();
    this.categories.subscribe((data) => {
      console.log("CATEGORIES AAAA", data);
    });
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  toggleSideNav() {
    this.isVisible = !this.isVisible;
  }

  wideInput() {
    this.inputFocused = true;
  }

  smallInput() {
    this.inputFocused = false;
  }

  goToCart() {
    this.router.navigate(["cart"]);
  }
}
