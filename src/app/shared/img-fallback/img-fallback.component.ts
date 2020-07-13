import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-img-fallback',
   templateUrl: './img-fallback.component.html',
   styleUrls: ['./img-fallback.component.scss'],
})
export class ImgFallbackComponent {
   imgSrc: string;
   @Input() set src(value: string) {
      this.imgSrc = value;
   }

   onError() {
      this.imgSrc = 'assets/images/pokemon-404.jpg';
   }
}
