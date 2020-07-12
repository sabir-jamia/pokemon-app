import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImgCardHoverDirective } from './img-hover/img-card-hover.directive';
import { BadgeComponent } from './badge/badge.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
   exports: [
      CommonModule,
      MaterialModule,
      ImgCardHoverDirective,
      BadgeComponent,
      CardListComponent,
   ],
   declarations: [
      ImgCardHoverDirective,
      BadgeComponent,
      Error404Component,
      CardListComponent,
   ],
   imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
