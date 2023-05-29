import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalStateService } from "src/app/services/global-state.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"],
})
export class SingleProductComponent implements OnInit {
  productId: number | undefined;
  sizeSelectedId: any;
  product: any;
  productImages: any;
  currentLanguage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private translateService: TranslateService,
    private globalStateService: GlobalStateService,
    private cartService: CartService
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    console.log("LANG", this.translateService.currentLang);
    // const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log("ID: ", this.productId);

    this.globalStateService.lang$.subscribe((lang) => {
      this.currentLanguage = lang;
      console.log("Global state:", this.currentLanguage);
    });

    this.productsService
      .getProduct(this.productId, this.currentLanguage)
      .subscribe((product) => {
        console.log("PRODUCT", product);
        this.product = product;
        this.productImages = product.images;
      });
  }

  addToCart() {
    console.log("add to cart");
    const obj = {
      id: this.productId,
      productDetailsId: this.sizeSelectedId,
      quantity: 1,
    };
    this.cartService.addItemToCartList(obj).subscribe((data) => {
      console.log(data);
    });
  }

  handleSizeSelect(e: any) {
    // console.log(e.target.value);
    const newSize = this.product.productSizes.find((size: any) => {
      return size.eu === e.target.value;
    });
    console.log("Size id:", newSize.productDetailsId);
    this.sizeSelectedId = newSize.productDetailsId;
  }
}
