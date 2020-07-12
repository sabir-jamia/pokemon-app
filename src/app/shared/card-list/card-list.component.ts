import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '@env/environment';

@Component({
   selector: 'app-card-list',
   templateUrl: './card-list.component.html',
   styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
   @Input() cards;
   @Input() page: number;
   @Output() nextClicked = new EventEmitter();
   @Output() previousClicked = new EventEmitter();
   perPageLimit = environment.perPageLimit;
}
