import { Component, OnChanges, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalStateService } from "src/app/services/global-state.service";
import { WhishlistService } from "src/app/services/wishlist.service";
@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"],
})
export class SingleProductComponent implements OnInit, OnChanges {
  product: any;
  productImages: any;
  currentLanguage: string | undefined;
  wishListProduct: any;
  wishListProductId: any;
  isInWishlist: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private translateService: TranslateService,
    private globalStateService: GlobalStateService,
    private wishListService: WhishlistService
  ) {}

  ngOnInit(): void {
    console.log("LANG", this.translateService.currentLang);
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.wishListProductId = id;

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

    this.wishListService.getWishList().subscribe((products) => {
      console.log(products.items);
      products.items.filter((product: any) => {
        if (this.wishListProductId && product.id === this.wishListProductId) {
          this.isInWishlist = true;
          console.log("ID UGUALI", product.id, this.wishListProductId);
        } else {
          console.log("DIVERSI");
        }
      });
    });
  }

  addToWishlist(id: any) {
    this.wishListProduct = {
      productId: id,
    };
    this.wishListService.addWishList(this.wishListProduct).subscribe(() => {
      this.isInWishlist = true;
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
