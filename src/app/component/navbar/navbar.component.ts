import {Component, OnInit} from '@angular/core';
import { JwtInterceptor } from '../../interceptors/jwt.interceptor';
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
