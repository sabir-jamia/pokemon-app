import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Product } from './products.model';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ProdcutsService {
   model = 'products';

   constructor(private httpClient: HttpClient) {}

   getUrl() {
      return `${environment.productApiEndPoint}${this.model}`;
   }

   getUrlForId(id: string) {
      return `${this.getUrl()}/${id}`;
   }

   all(page: number): Observable<HttpResponse<Product[]>> {
      const limit = environment.perPageLimit;
      return this.httpClient.get<Product[]>(this.getUrl(), {
         params: { _limit: String(limit), _page: String(page) },
         observe: 'response',
      });
   }

   load(productId: string) {
      return this.httpClient.get(this.getUrlForId(productId));
   }

   create(product: Product) {
      return this.httpClient.post(this.getUrl(), product);
   }

   update(product: Product) {
      return this.httpClient.patch(this.getUrlForId(product.id), product);
   }
}
