import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokemon/pokemon.service';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
   selector: 'app-pokemon',
   templateUrl: './pokemon.component.html',
   styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
   url: string;
   page = 1;
   pokemonList$: Observable<any>;

   constructor(private pokemonService: PokemonService) {}

   ngOnInit(): void {
      this.loadPokemons();
   }

   next() {
      this.page++;
      this.loadPokemons();
   }

   previous() {
      this.page--;
      this.loadPokemons();
   }

   loadPokemons() {
      const pokemons$: Observable<any> = this.pokemonService.all(this.page);

      const pokemonDetails$: Observable<any> = pokemons$.pipe(
         switchMap(({ results }: any) =>
            forkJoin(
               results.map(({ url }) => {
                  const matched = /\/([0-9]+)\/$/.exec(url);
                  return matched ? this.pokemonService.load(matched[1]) : null;
               })
            )
         )
      );

      this.pokemonList$ = forkJoin([pokemons$, pokemonDetails$]).pipe(
         map(([pokemons, pokemonDetails]) => {
            const results = pokemons.results.map((item, key) => ({
               name: item.name,
               url: `/details/${pokemonDetails[key].id}`,
               imgSrc: pokemonDetails[key].sprites.front_default,
            }));
            const count = pokemons.count;
            return { count, results };
         })
      );
   }
}
