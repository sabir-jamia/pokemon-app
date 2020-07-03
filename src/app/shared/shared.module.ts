import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImgCardHoverDirective } from './img-hover/img-card-hover.directive';
import { BadgeComponent } from './badge/badge.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';

@NgModule({
   exports: [
      CommonModule,
      MaterialModule,
      ImgCardHoverDirective,
      BadgeComponent,
   ],
   declarations: [ImgCardHoverDirective, BadgeComponent, Error404Component],
   imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
