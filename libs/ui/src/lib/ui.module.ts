import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { AutoSearchComponent } from './auto-search/auto-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    TopbarComponent,
    AutoSearchComponent
  ],
  exports: [
    TopbarComponent
  ]
})
export class UiModule {}
