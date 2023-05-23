import { Component, OnInit } from "@angular/core";
import { AddressesService } from "src/app/services/addresses.service";
@Component({
  selector: "app-address-list",
  templateUrl: "./address-list.component.html",
  styleUrls: ["./address-list.component.scss"],
})
export class AddressListComponent implements OnInit {
  addresses: any;
  constructor(private addressesService: AddressesService) {}

  ngOnInit(): void {
    const addresses = this.addressesService.getAddressList();
    addresses.subscribe((data) => {
      console.log("ADDRESSES", data);
      this.addresses = data;
    });
  }
}
