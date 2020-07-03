import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GenderPipe } from './pokemon/gender.pipe';
import { EffortValuePipe } from './pokemon/effort-value.pipe';
import { HttpCacheInterceptor } from './http-cache/http-cache.interceptor';
import { LoadingInterceptor } from './loading/loading.interceptor';

@NgModule({
   imports: [HttpClientModule],
   declarations: [GenderPipe, EffortValuePipe],
   exports: [GenderPipe, EffortValuePipe],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: HttpCacheInterceptor,
         multi: true,
      },
      {
         provide: HTTP_INTERCEPTORS,
         useClass: LoadingInterceptor,
         multi: true,
      },
   ],
})
export class CoreModule {}
