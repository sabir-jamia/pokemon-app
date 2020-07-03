import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
   providedIn: 'root',
})
export class SearchService {
   model = 'pokemon';

   constructor(private httpClient: HttpClient) {}

   getUrlForName(name: string) {
      return `${environment.apiEndPoint}${this.model}/${name}/`;
   }

   search(name: string) {
      return this.httpClient.get(this.getUrlForName(name));
   }
}
