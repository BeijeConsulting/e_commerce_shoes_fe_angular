import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  status: boolean = true;
  clickEvent() {
    this.status = !this.status;
    console.log(this.status);
  }
}
