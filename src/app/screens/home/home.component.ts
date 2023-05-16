import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    const products = this.productsService.getProducts();
    products.subscribe((data) => {
      console.log("PRODUCTS", data);
    });

    const newProducts = this.productsService.getNewProducts();
    newProducts.subscribe((data) => {
      console.log("NEWPRODUCTS", data);
    });

    const searchedProduct = this.productsService.getSearchProduct();
    searchedProduct.subscribe((data) => {
      console.log("SEARCHEDPRODUCT", data);
    });

    const productById = this.productsService.getProduct();
    productById.subscribe((data) => {
      console.log("PRODUCT BY ID", data);
    });

    const brands = this.productsService.getBrands();
    brands.subscribe((data) => {
      console.log("BRANDS", data);
    });

    const categories = this.productsService.getCategories();
    categories.subscribe((data) => {
      console.log("CATEGORIES", data);
    });

    const colors = this.productsService.getColors();
    colors.subscribe((data) => {
      console.log("COLORS", data);
    });

    const sizes = this.productsService.getSizes();
    sizes.subscribe((data) => {
      console.log("SIZES", data);
    });
  }
}
