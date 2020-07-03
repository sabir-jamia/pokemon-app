import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-pokemon-details',
   templateUrl: './pokemon-details.component.html',
   styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
   pokemonDetails;
   themeClass;

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.route.data.subscribe((result: any) => {
         this.pokemonDetails = result.details;
         this.setThemeClass(this.pokemonDetails.types);
      });
   }

   setThemeClass(types) {
      const primaryType = types.find((type) => type.slot === 1);
      this.themeClass = `theme-${primaryType.type.name}`;
   }
}
