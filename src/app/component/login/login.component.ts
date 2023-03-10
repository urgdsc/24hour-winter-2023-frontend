import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.generateFormGroup();
  }

  generateFormGroup() {
    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const email = this.formGroup.get("email")?.value;
      const password = this.formGroup.get("password")?.value;
      // send the email and password to auth
      if (email && password) {
        this.authService.login(email, password);
      }
    }
    this.router.navigate(["/"]);
  }

}
