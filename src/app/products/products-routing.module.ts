import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
   {
      path: 'create',
      component: ProductsComponent,
   },
   {
      path: 'list',
      component: ProductListComponent,
   },
   {
      path: ':id',
      component: ProductsComponent,
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ProductsRoutingModule {}
