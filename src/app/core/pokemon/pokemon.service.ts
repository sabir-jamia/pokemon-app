import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.models';

@Injectable({
   providedIn: 'root',
})
export class PokemonService {
   model = 'pokemon';

   constructor(private httpClient: HttpClient) {}

   getUrl() {
      return `${environment.apiEndPoint}${this.model}`;
   }

   getUrlForId(id: string) {
      return `${this.getUrl()}/${id}`;
   }

   all(page: number): Observable<Pokemon[]> {
      const limit = environment.perPageLimit;
      const offset = (page - 1) * limit;
      return this.httpClient.get<Pokemon[]>(this.getUrl(), {
         params: { offset: String(offset), limit: String(limit) },
      });
   }

   load(id: string): Observable<Pokemon> {
      return this.httpClient.get<Pokemon>(this.getUrlForId(id));
   }
}
