import { Component, OnInit } from '@angular/core';
import { ProdcutsService } from 'src/app/core/products/prodcuts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
   selector: 'app-product-list',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
   products$: Observable<any>;
   page = 1;
   constructor(private productsService: ProdcutsService) {}

   ngOnInit(): void {
      this.loadProducts();
   }

   loadProducts() {
      this.products$ = this.productsService.all(this.page).pipe(
         map(response => {
            const results = response.body.map(product => ({
               url: `/products/${product.id}`,
               name: product.name,
               imgSrc: product.imageUrl,
            }));
            return {
               results,
               count: response.headers.get('x-total-count'),
            };
         })
      );
   }

   onNext() {
      this.page++;
      this.loadProducts();
   }

   onPrevious() {
      this.page--;
      this.loadProducts();
   }
}
