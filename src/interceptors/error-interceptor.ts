import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Passou!");
    return next.handle(req)
      .catch((error, caught) => {
        let errorHandled = error;
        if (errorHandled.error) {
          errorHandled = errorHandled.error;
        }
        if (!errorHandled.status) {
          errorHandled = JSON.parse(errorHandled);
        }
        console.log("Erro detectado pelo interceptor:");
        console.log(errorHandled);
        return Observable.throw(errorHandled);
      }) as any;
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
