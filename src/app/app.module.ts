import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      CoreModule,
      ToolbarModule,
      AppRoutingModule,
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
