import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit() {
    this.generateFormGroup();
  }
  generateFormGroup() {
    this.formGroup = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  onSubmit() {
    const first_name = this.formGroup.get("firstName")?.value;
    const last_name = this.formGroup.get("lastName")?.value;
    const email = this.formGroup.get("email")?.value;
    const password = this.formGroup.get("password")?.value;
    const confirm_password = this.formGroup.get("confirmPassword")?.value;

    // TODO: validations

    // const newUser: NewUser = {
    //   first_name: first_name,
    //   last_name: last_name,
    //   email: email,
    //   password: password,
    // }

    // const response = this.authService.register(newUser);

  }

}
