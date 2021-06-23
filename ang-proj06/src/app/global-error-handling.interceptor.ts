import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators'
@Injectable()
export class GlobalErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //code any job that must happen before a req leaves
    //like chagning the media type or adding a header ....etc

    return next.handle(request).pipe(
      catchError(err => {
        console.log(err);
        throw "Sorry! Unable to process the operation";
      })
    );
  }
}
