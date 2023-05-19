import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: any;

  ngOnInit(): void {
    const products = this.productsService.getProducts(
      1,
      "it",
      "?type=m&orderBy=date",
      8
    );
    products.subscribe((data) => {
      this.products = data.products;
      console.log("DATAAAA", data);
    });
    // const productById = this.productsService.getProduct();
    // productById.subscribe((data) => {
    //   this.products = data;
    //   console.log("PRODUCT BY ID", data);
    // });
  }
}
