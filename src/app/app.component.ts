import {
   Component,
   OnInit,
   AfterViewInit,
   ViewChild,
   TemplateRef,
   ViewContainerRef,
} from '@angular/core';
import { LoadingService } from './core/loading/loading.service';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
   title = 'Pokémon App';
   showSpinner = false;
   @ViewChild(TemplateRef) template: TemplateRef<any>;
   templatePortal: TemplatePortal;
   overlayRef = this.overlay.create({
      height: '100vh',
      width: '100vw',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
   });

   constructor(
      private loadingService: LoadingService,
      private overlay: Overlay,
      private viewContainerRef: ViewContainerRef
   ) {}

   ngOnInit() {
      this.loadingService.loading$.subscribe((res) => {
         if (res === true) {
            this.showSpinner = true;
            this.overlayRef.attach(this.templatePortal);
         } else {
            this.overlayRef.detach();
            this.showSpinner = false;
         }
      });
   }

   ngAfterViewInit() {
      this.templatePortal = new TemplatePortal(
         this.template,
         this.viewContainerRef
      );
   }
}
