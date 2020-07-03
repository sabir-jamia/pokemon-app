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

   all(url?: string): Observable<Pokemon[]> {
      return this.httpClient.get<Pokemon[]>(url ? url : this.getUrl(), {
         params: { limit: '30', offset: '0' },
      });
   }

   load(id: string): Observable<Pokemon> {
      return this.httpClient.get<Pokemon>(this.getUrlForId(id));
   }
}
