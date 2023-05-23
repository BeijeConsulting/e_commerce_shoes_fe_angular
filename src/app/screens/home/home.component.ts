import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

// SERVICES
import { ProductsService } from "src/app/services/products.service";
import { CartService } from "src/app/services/cart.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  productsMan: any = null;
  productsManCategory: any[] = [];
  productsWoman: any[] = [];
  productsUnisex: any[] = [];
  isDataReady: boolean = false;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // PRODUTS APIS --------------------------------------
    const products = this.productsService.getProducts(
      1,
      "it",
      "?type=m&orderBy=date",
      8
    );
    products.subscribe((data) => {
      console.log("PRODUCTS", data);
    });

    const productsMan = this.productsService.getProducts(
      1,
      "it",
      "?type=m&orderBy=date",
      8
    );
    productsMan.subscribe((data) => {
      this.productsMan = data.products;
      this.isDataReady = true;

      console.log("PRODUCTSMAN", this.productsMan);
    });

    const productsManCategory = this.productsService.getProducts(
      1,
      "it",
      "?type=w&category=camminata",
      8
    );

    productsManCategory.subscribe((data) => {
      this. productsManCategory = data.products;
      this.isDataReady = true;

      console.log("PRODUCTSMAN-CATEGORY", this. productsManCategory);
    });

    // const productsWoman = this.productsService.getProducts(
    //   1,
    //   "it",
    //   "?type=w&orderBy=date",
    //   8
    // );
    // productsWoman.subscribe((data) => {
    //   this.productsWoman = data;

    //   console.log("PRODUCTSWOMAN", this.productsWoman);
    // });

    // const productsUnisex = this.productsService.getProducts(
    //   1,
    //   "it",
    //   "?type=u&orderBy=date",
    //   8
    // );
    // productsUnisex.subscribe((data) => {
    //   this.productsUnisex = data;

    //   console.log("PRODUCTSUNISEX", this.productsUnisex);
    // });

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
    // PRODUTS APIS --------------------------------------

    // CART APIS------------------------------------------
    const cartList = this.cartService.getCartList();
    cartList.subscribe((data) => {
      console.log("CARTLIST", data);
    });

    const cartListDetail = this.cartService.getCartListDetail(1);
    cartListDetail.subscribe((data) => {
      console.log("CARTLIST DETAILS", data);
    });
  }
}
