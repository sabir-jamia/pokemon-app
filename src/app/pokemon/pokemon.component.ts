import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../core/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

      this.pokemonList$ = pokemons$.pipe(
         map((response: any) => {
            const results = [];
            response.results.forEach(({ name, url }) => {
               const matched = /\/([0-9]+)\/$/.exec(url);
               if (!matched) {
                  return;
               }

               results.push({
                  name,
                  url: `/details/${matched[1]}`,
                  imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${matched[1]}.png`,
               });
            });
            return { count: response.results, results };
         })
      );
   }
}
