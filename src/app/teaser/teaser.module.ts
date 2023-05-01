import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaserRoutingModule } from './teaser-routing.module';
import { TeaserMainComponent } from './teaser-main/teaser-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeaserMainComponent],
  imports: [
    CommonModule,
    TeaserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeaserModule {}
