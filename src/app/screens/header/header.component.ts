import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isVisible: boolean = false;

  inputFocused: boolean = false;

  constructor(private router: Router) {}
  toggleSideNav() {
    this.isVisible = !this.isVisible;
  }

  wideInput() {
    this.inputFocused = true;
  }
  smallInput() {
    this.inputFocused = false;
  }

  goToCart() {
    this.router.navigate(["cart"]);
  }
}
