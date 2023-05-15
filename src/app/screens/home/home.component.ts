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
      console.log("data", data);
    });

    console.log("HomeComponent.ngOnInit");
  }
}
