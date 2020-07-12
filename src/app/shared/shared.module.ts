import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImgCardHoverDirective } from './img-hover/img-card-hover.directive';
import { BadgeComponent } from './badge/badge.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { ImgFallbackComponent } from './img-fallback/img-fallback.component';

@NgModule({
   exports: [
      CommonModule,
      MaterialModule,
      ImgCardHoverDirective,
      BadgeComponent,
      CardListComponent,
      ImgFallbackComponent,
   ],
   declarations: [
      ImgCardHoverDirective,
      BadgeComponent,
      Error404Component,
      CardListComponent,
      ImgFallbackComponent,
   ],
   imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
