import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
   HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
   caches = new Map();

   intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
   ): Observable<HttpEvent<unknown>> {
      if (this.caches.has(request.urlWithParams) && request.method === 'GET') {
         return of(this.caches.get(request.urlWithParams));
      }

      return next.handle(request).pipe(
         tap((event) => {
            if (
               event instanceof HttpResponse &&
               request.method === 'GET' &&
               !request.urlWithParams.includes('products')
            ) {
               this.caches.set(request.urlWithParams, event);
            }
         })
      );
   }
}
