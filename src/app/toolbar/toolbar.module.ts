import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
   declarations: [ToolbarComponent, SearchComponent],
   imports: [SharedModule, RouterModule, FormsModule],
   exports: [ToolbarComponent],
})
export class ToolbarModule {}
