import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
   selector: '[appImgCardHover]',
})
export class ImgCardHoverDirective {
   constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

   @HostListener('mouseenter') onMouseOver() {
      this.renderer.addClass(
         this.elementRef.nativeElement,
         'mat-elevation-z15'
      );
   }

   @HostListener('mouseleave') onMouseOut() {
      this.renderer.removeClass(
         this.elementRef.nativeElement,
         'mat-elevation-z15'
      );
   }
}
