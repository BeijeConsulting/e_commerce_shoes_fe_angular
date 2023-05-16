import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import { AddressesService } from "src/app/services/addresses.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private addressesService: AddressesService
  ) {}
  ngOnInit(): void {
    console.log("HomeComponent.ngOnInit");

    // GET PRODUCTS
    const products = this.productsService.getProducts();
    products.subscribe((data) => {
      console.log("products", data);
    });
    // GET ADDRESSES
    const addresses = this.addressesService.getAddressList();
    addresses.subscribe((data) => {
      console.log("addresses", data);
    });
  }
}
