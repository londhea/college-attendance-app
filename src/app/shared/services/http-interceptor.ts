import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError} from "rxjs/operators";
import {MessageService} from "primeng/api";


@Injectable({
  providedIn: 'root'
})
export class HttpIntercept implements HttpInterceptor {
  constructor(public router: Router, public messageService: MessageService) {
    console.log('interceptor called');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
            console.log('inside http intercept');
            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case 401:
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  sessionStorage.clear();
                  // localStorage.clear();
                  // localStorage.clear();
                  this.router.navigate(['/']);
                  break;
                case 403:
                  console.log('unauthorized request');
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  sessionStorage.clear();
                  // localStorage.clear();
                  // localStorage.clear();
                  this.router.navigate(['/']);
                  break;
                case 404:
                  console.log('Service not found');
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  break;
                case 408:
                  console.log('Request Timedout');
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  break;
                case 500:
                  console.log('Internal Server Error');
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  break;
                default:
                  console.log('Server Error' + JSON.stringify(error));
                  this.messageService.add({
                    severity: 'danger',
                    summary: error.message,
                  });
                  break;
              }
              this.messageService.add({
                severity: 'danger',
                summary: error.message,
              });
              return throwError(error.message);
            } else {
              this.messageService.add({
                severity: 'danger',
                summary: JSON.stringify(error),
              });
              return throwError(error);
            }
          }
        )
      );
  }
}
