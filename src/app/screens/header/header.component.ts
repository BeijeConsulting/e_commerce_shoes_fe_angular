import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isVisible: boolean = false;

  toggleSideNav() {
    this.isVisible = !this.isVisible;
  }
}
