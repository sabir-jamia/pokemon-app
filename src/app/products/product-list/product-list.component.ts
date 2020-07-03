import { Component, OnInit } from '@angular/core';
import { ProdcutsService } from 'src/app/core/products/prodcuts.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/products/products.model';

@Component({
   selector: 'app-product-list',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
   products$: Observable<Product[]>;
   constructor(private productsService: ProdcutsService) {}

   ngOnInit(): void {
      this.products$ = this.productsService.all();
   }
}
