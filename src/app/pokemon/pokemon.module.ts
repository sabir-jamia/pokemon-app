import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './pokemon-damage/pokemon-damage.component';

@NgModule({
   declarations: [
      PokemonComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      PokemonStatsComponent,
      PokemonProfileComponent,
      PokemonEvolutionComponent,
      PokemonDamageComponent,
   ],
   imports: [PokemonRoutingModule, SharedModule, CoreModule],
})
export class PokemonModule {}
