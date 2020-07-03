import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   {
      path: '',
      loadChildren: () =>
         import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
   },
   {
      path: 'products',
      loadChildren: () =>
         import('./products/products.module').then((m) => m.ProductsModule),
   },
   {
      path: '**',
      component: Error404Component,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
