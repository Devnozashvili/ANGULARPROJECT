import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorhandlerService } from './errorhandler.service'; 


@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

 constructor(private errorHandler : ErrorhandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          console.log("Bad request", error.statusText);
        } else if (error.status === 500) {
          console.log("Server error", error.statusText);
        } else if (error.status === 404) {
          console.log("Not found", error.statusText);
        } else {
          console.log("Unknown error", error.statusText);
        }
        this.errorHandler.showDialog(error.statusText);
        throw error;
      })
    );
  }
}
  