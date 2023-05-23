import { Component, OnInit } from "@angular/core";
import { AuthServicesService } from "src/app/services/auth.service";
import { OrdersService } from "src/app/services/orders.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];
  user: any;
  constructor(
    private ordersService: OrdersService,
    private authService: AuthServicesService
  ) {}

  ngOnInit(): void {
    const orders = this.ordersService.getOrderList();
    orders.subscribe((data) => {
      this.orders = data.orders;
      console.log("ORDERS", this.orders);
    });

    const user = this.authService.getUser();
    user.subscribe((data) => {
      this.user = data;
      console.log("USER", this.user);
    });
  }
}
