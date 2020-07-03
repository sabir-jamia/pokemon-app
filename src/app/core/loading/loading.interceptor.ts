import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
   activeRequest = 0;

   constructor(private loadingService: LoadingService) {}

   intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
   ): Observable<HttpEvent<unknown>> {
      if (this.activeRequest === 0) {
         this.loadingService.startLoading();
      }

      this.activeRequest++;

      return next.handle(request).pipe(
         finalize(() => {
            this.activeRequest--;
            if (this.activeRequest === 0) {
               this.loadingService.stopLoading();
            }
         })
      );
   }
}
