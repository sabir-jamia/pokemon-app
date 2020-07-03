import { Component, OnInit, Input } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { TypeService } from 'src/app/core/pokemon/type.service';

@Component({
   selector: 'app-pokemon-damage',
   templateUrl: './pokemon-damage.component.html',
   styleUrls: ['./pokemon-damage.component.scss'],
})
export class PokemonDamageComponent implements OnInit {
   @Input() details;
   @Input() id;
   types$;

   constructor(private typeService: TypeService) {}

   ngOnInit(): void {
      this.types$ = forkJoin(
         this.details.types.map((value) => {
            const url = value.type.url;
            const matched = /\/([0-9]+)\/$/.exec(url);
            return matched ? this.typeService.load(matched[1]) : of(null);
         })
      );
   }
}
