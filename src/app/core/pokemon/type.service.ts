import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
   providedIn: 'root',
})
export class TypeService {
   model = 'type';

   constructor(private httpClient: HttpClient) {}

   getUrl() {
      return `${environment.apiEndPoint}${this.model}`;
   }

   getUrlForId(id: string) {
      return `${this.getUrl()}/${id}/`;
   }

   load(id: string) {
      return this.httpClient.get(this.getUrlForId(id));
   }
}
