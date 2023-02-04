import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with jwt token if available
    if (this.authService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.token()
        }
      });
    }

    // add content-type header if request is POST
    if (request.method === "POST") {
      request = request.clone({
        setHeaders: {
          "Content-Type": "application/json"
        },
        // url: request.url.replace("http://", "https://")  // TODO: uncomment this line to force https on POST requests
      });
    }

    // redirect to login page if 401 response returned from api
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          // auto logout if 401 response returned from api
          this.authService.logoutClient();
          this.router.navigate(["/auth/login"]);
        }
        throw error;
      })
    );
  }
}
