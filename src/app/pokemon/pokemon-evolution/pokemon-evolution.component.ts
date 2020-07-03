import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { EvolutionService } from 'src/app/core/pokemon/evolution.service';
import { PokemonService } from 'src/app/core/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/core/pokemon/pokemon.models';

@Component({
   selector: 'app-pokemon-evolution',
   templateUrl: './pokemon-evolution.component.html',
   styleUrls: ['./pokemon-evolution.component.scss'],
})
export class PokemonEvolutionComponent implements OnInit {
   evoledPokemon$: Observable<Pokemon>;
   @Input() id;
   @Input() details;
   constructor(
      private evolutionService: EvolutionService,
      private pokemonService: PokemonService
   ) {}

   ngOnInit(): void {
      this.evoledPokemon$ = this.evolutionService.load(this.id).pipe(
         switchMap((evolution) => {
            const url = evolution.chain.evolves_to[0].species.url;
            const matched = /\/([0-9]+)\/$/.exec(url);
            return matched ? this.pokemonService.load(matched[1]) : null;
         })
      );
   }
}
