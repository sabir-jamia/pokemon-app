import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from 'src/app/core/pokemon/pokemon.models';
import { SpeciesService } from 'src/app/core/pokemon/species.service';

@Component({
   selector: 'app-pokemon-profile',
   templateUrl: './pokemon-profile.component.html',
   styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
   @Input() details;
   @Input() id;
   species$: Observable<Species>;

   constructor(private speciesService: SpeciesService) {}

   ngOnInit(): void {
      this.species$ = this.speciesService.load(this.id);
   }
}
