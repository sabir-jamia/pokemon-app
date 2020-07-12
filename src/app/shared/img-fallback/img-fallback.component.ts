import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-img-fallback',
   templateUrl: './img-fallback.component.html',
   styleUrls: ['./img-fallback.component.scss'],
})
export class ImgFallbackComponent {
   @Input() src: string;
}
