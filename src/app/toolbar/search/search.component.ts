import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
   searchInput = '';

   constructor(private router: Router) {}

   doSearch() {
      this.router.navigate(['/details', this.searchInput]).then(() => {
         this.searchInput = '';
      });
   }
}
