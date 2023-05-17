
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  contactForm!: FormGroup; // Add the "!" to allow an uninitialized valueù
  hide = true;
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  birthDate = new FormControl('', [Validators.required]);
  acceptAgreement = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      // Define your form controls with their initial values and validators
      // For example:
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
      acceptAgreement: ['', Validators.required],
    });
  }

  save() {
    // Perform form submission logic here
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    console.log("Selected date", selectedDate)
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return
  }

  getErrorMessageName() {
    if (this.password.hasError('required')) {
      return 'You must enter a name';
    }
    return
  }
  getErrorMessageSurname() {
    if (this.password.hasError('required')) {
      return 'You must enter a surname';
    }
    return
  }

  getErrorMessageAccept() {
    if (this.password.hasError('required')) {
      return 'You have to agree first';
    }
    return
  }

  getErrorMessageBirthDate() {
    if (this.birthDate.hasError('required')) {
      return 'You must insert a birth date';
    }
    return
  }
}
