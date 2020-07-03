import { Injectable } from '@angular/core';
import {
   Resolve,
   ActivatedRouteSnapshot,
   RouterStateSnapshot,
} from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { PokemonService } from './pokemon.service';
import { catchError } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class DetailsResolverService implements Resolve<any> {
   constructor(private pokemonService: PokemonService) {}

   resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<any> {
      const idOrName = route.paramMap.get('id');

      return this.pokemonService.load(idOrName).pipe(catchError(() => EMPTY));
   }
}
