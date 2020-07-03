import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Species } from './pokemon.models';

@Injectable({
   providedIn: 'root',
})
export class SpeciesService {
   model = 'pokemon-species';

   constructor(private httpClient: HttpClient) {}

   getUrl() {
      return `${environment.apiEndPoint}${this.model}`;
   }

   getUrlForId(id: string) {
      return `${this.getUrl()}/${id}`;
   }

   load(id: string): Observable<Species> {
      return this.httpClient.get<Species>(this.getUrlForId(id));
   }
}
