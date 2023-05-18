import { Component } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isVisible: boolean = false;

  inputFocused: boolean = false;

  constructor() {}
  toggleSideNav() {
    this.isVisible = !this.isVisible;
  }

  wideInput() {
    this.inputFocused = true;
  }
  smallInput() {
    this.inputFocused = false;
  }
}
