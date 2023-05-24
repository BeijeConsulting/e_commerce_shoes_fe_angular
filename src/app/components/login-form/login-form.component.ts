import { IfStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { AuthServicesService } from "src/app/services/auth.service";
import { LoginResponse } from "src/app/interfaces/LoginResponseInterface";
import { StorageService } from "src/app/services/storage/storage.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup; // Add the "!" to allow an uninitialized valueù
  emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?])(?=.*[^\s]).{8,}$/;
  hide = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?])(?=.*[^\s]).{8,}$/
    ),
  ]);

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private authService: AuthServicesService
  ) {}

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   // Define your form controls with their initial values and validators
    //   // For example:
    //   email: new FormControl("", [Validators.required, Validators.email]),
    //   password: new FormControl("", [
    //     Validators.required,
    //     Validators.pattern(this.passwordRegex),
    //   ]),
    // });
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  handleResponse(resp: LoginResponse): void {
    console.log("loggato con successo");
    this.storageService.setStorage<string>("token", resp.token);
    this.storageService.setStorage<string>("refreshToken", resp.refreshToken);
  }

  handleLoginError(err: any): void {
    console.log(err);
  }

  save() {
    // Perform form submission logic here
    console.log("Is login valid:", this.loginForm.valid);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (resp) => this.handleResponse(resp),
        error: (err) => this.handleLoginError(err),
      });
    } else {
    }
  }

  getErrorMessageEmail() {
    if (this.email.hasError("required")) {
      return "You must enter an email";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }

  getErrorMessagePassword() {
    // console.log(this.password.errors);
    if (this.password.hasError("required")) {
      return "You must enter a password";
    }
    return this.password.hasError("pattern") ? "Not a valid password" : "";
  }
}
