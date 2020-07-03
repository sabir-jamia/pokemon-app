import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokemon/pokemon.service';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
   selector: 'app-pokemon',
   templateUrl: './pokemon.component.html',
   styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
   pokemons$: Observable<any>;
   pokemonDetails$: Observable<any>;
   url: string;

   constructor(private pokemonService: PokemonService) {}

   ngOnInit(): void {
      this.loadPokemons();
   }

   next(pokemons) {
      this.loadPokemons(pokemons.next);
   }

   previous(pokemons) {
      this.loadPokemons(pokemons.previous);
   }

   loadPokemons(pokemonUrl: string = null) {
      this.pokemons$ = this.pokemonService.all(pokemonUrl);
      this.pokemonDetails$ = this.pokemons$.pipe(
         switchMap(({ results }: any) =>
            forkJoin(
               results.map(({ url }) => {
                  const matched = /\/([0-9]+)\/$/.exec(url);
                  return matched ? this.pokemonService.load(matched[1]) : null;
               })
            )
         )
      );
   }
}
