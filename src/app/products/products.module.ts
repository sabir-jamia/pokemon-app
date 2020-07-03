import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
   declarations: [
      ProductListComponent,
      ProductsComponent,
      ProductFormComponent,
   ],
   imports: [ProductsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class ProductsModule {}
