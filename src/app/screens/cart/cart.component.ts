import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { OrdersService } from "src/app/services/orders.service";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(
    private ordersService: OrdersService,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  products: any;
  totalPrice: any;
  couponId?: any;

  ngOnInit(): void {
    // const products = this.ordersService.getOrderList();
    // products.subscribe((data) => {
    //   this.products = data.products;
    // });
    const products = this.cartService.getCartList();
    products.subscribe((data) => {
      this.products = data.items;
      const money = data.items.map((el: any) => {
        return el.sellingItemTotalPrice;
      });

      this.totalPrice = money.reduce(
        (accumulator: number, currentValue: number) => {
          return accumulator + currentValue;
        },
        0
      );

      console.log(this.totalPrice);
    });

    // const products = this.productsService.getProducts(
    //   1,
    //   "it",
    //   "?type=m&orderBy=date",
    //   8
    // );
    // products.subscribe((data) => {
    //   this.products = data.products;
    //   console.log("DATAAAA", data);
    // });
    // const productById = this.productsService.getProduct();
    // productById.subscribe((data) => {
    //   this.products = data;
    //   console.log("PRODUCT BY ID", data);
    // });
  }
  getCoupon(id: any) {
    this.couponId = id;
    console.log(this.couponId);
  }
}
