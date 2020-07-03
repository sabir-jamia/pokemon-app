import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { EvolutionChain } from './pokemon.models';

@Injectable({
   providedIn: 'root',
})
export class EvolutionService {
   model = 'evolution-chain';

   constructor(private httpClient: HttpClient) {}

   getUrl() {
      return `${environment.apiEndPoint}${this.model}`;
   }

   getUrlForId(id): string {
      return `${this.getUrl()}/${id}`;
   }

   load(id: string): Observable<EvolutionChain> {
      return this.httpClient.get<EvolutionChain>(this.getUrlForId(id));
   }
}
