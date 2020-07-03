import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-pokemon-list',
   templateUrl: './pokemon-list.component.html',
   styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
   @Input() pokemons;
   @Input() pokemonDetails;
   @Output() nextClicked = new EventEmitter();
   @Output() previousClicked = new EventEmitter();

   test() {
      console.log('Hello World!');
   }
}
