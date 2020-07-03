import { Component, OnInit } from '@angular/core';
import { ProdcutsService } from 'src/app/core/products/prodcuts.service';
import { Product } from 'src/app/core/products/products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
   selector: 'app-create-product',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
   categories = ['Electronics', 'Cloths', 'Blanket'];
   product$: Observable<Product>;

   constructor(
      private productsService: ProdcutsService,
      private route: ActivatedRoute,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.product$ = this.route.params.pipe(
         switchMap((params) =>
            params.id ? this.productsService.load(params.id) : of(null)
         )
      );
   }

   save(product: Product) {
      if (product.id) {
         this.update(product);
      } else {
         this.create(product);
      }
   }

   create(product: Product) {
      this.productsService.create(product).subscribe((res) => {
         this.router.navigate(['products', 'list']);
      });
   }

   update(product: Product) {
      this.productsService.update(product).subscribe((res) => {
         this.router.navigate(['products', 'list']);
      });
   }
}
