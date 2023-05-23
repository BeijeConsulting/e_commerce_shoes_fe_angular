import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"],
})
export class SingleProductComponent implements OnInit {
  product: any;
  productImages: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    console.log("LANG", this.translateService.currentLang);
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("ID: ", id);
    this.productsService.getProduct(id, "it").subscribe((product) => {
      console.log(product);
      this.product = product;
      this.productImages = product.images;
    });
  }
}
