import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import {catchError, Observable, retry} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // retry(3), // TODO: use exponential backoff on specific errors
      catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            console.log("This is client side error");
            console.log(`Error: ${error.error.message}`);
          } else {
            console.log("This is server side error");
            console.log(`Error Code: ${error.status},  Message: ${error.message}`);
          }
          throw error;
        }
      ));
  }
}
