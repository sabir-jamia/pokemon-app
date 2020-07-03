import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DetailsResolverService } from '../core/pokemon/details.resolver.service';

const routes: Routes = [
   { path: 'home', component: PokemonComponent },
   {
      path: 'details/:id',
      component: PokemonDetailsComponent,
      resolve: {
         details: DetailsResolverService,
      },
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class PokemonRoutingModule {}
