import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-pokemon-list',
   templateUrl: './pokemon-list.component.html',
   styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
   @Input() pokemonList;
   @Input() page: number;

   @Output() nextClicked = new EventEmitter();
   @Output() previousClicked = new EventEmitter();
}
