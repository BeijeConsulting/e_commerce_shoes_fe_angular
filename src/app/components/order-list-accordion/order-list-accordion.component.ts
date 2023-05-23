import { Component, Input, OnInit } from "@angular/core";
import { AuthServicesService } from "src/app/services/auth.service";

@Component({
  selector: "app-order-list-accordion",
  templateUrl: "./order-list-accordion.component.html",
  styleUrls: ["./order-list-accordion.component.scss"],
})
export class OrderListAccordionComponent {
  @Input() order: any;
  @Input() user: any;
  constructor(private authService: AuthServicesService) {}

  // ngOnInit(): void {
  //   const user = this.authService.getUser();
  //   user.subscribe((data) => {
  //     console.log("user", data);
  //     this.user = data;
  //   });
  // }
}
