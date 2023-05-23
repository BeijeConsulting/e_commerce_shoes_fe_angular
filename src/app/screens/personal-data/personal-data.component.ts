import { Component, OnInit } from "@angular/core";
import { AuthServicesService } from "src/app/services/auth.service";

@Component({
  selector: "app-personal-data",
  templateUrl: "./personal-data.component.html",
  styleUrls: ["./personal-data.component.scss"],
})
export class PersonalDataComponent implements OnInit {
  userData: any;
  constructor(private authService: AuthServicesService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((data) => {
      console.log("USER DATA", data);
      this.userData = data;
    });
  }
}
