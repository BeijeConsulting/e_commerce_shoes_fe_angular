import { Component, OnChanges, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalStateService } from "src/app/services/global-state.service";
@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"],
})
export class SingleProductComponent implements OnInit, OnChanges {
  product: any;
  productImages: any;
  currentLanguage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private translateService: TranslateService,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit(): void {
    console.log("LANG", this.translateService.currentLang);
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("ID: ", id);

    this.globalStateService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log("Global state:", this.currentLanguage);
    });

    this.productsService
      .getProduct(id, this.currentLanguage)
      .subscribe((product) => {
        console.log(product);
        this.product = product;
        this.productImages = product.images;
      });
  }

  ngOnChanges(): void {
    // console.log("LANG", this.translateService.currentLang);
    // const id = Number(this.route.snapshot.paramMap.get("id"));
    // console.log("ID: ", id);
    // this.globalStateService.lang$.subscribe((lang) => {
    //   this.currentLanguage = lang;
    //   console.log("Global state:", this.currentLanguage);
    // });
    // this.productsService
    //   .getProduct(id, this.currentLanguage)
    //   .subscribe((product) => {
    //     console.log(product);
    //     this.product = product;
    //     this.productImages = product.images;
    //   });
  }
}
