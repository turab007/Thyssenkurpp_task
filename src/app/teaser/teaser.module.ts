import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaserRoutingModule } from './teaser-routing.module';
import { TeaserMainComponent } from './teaser-main/teaser-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [TeaserMainComponent, SettingsDialogComponent, DetailViewComponent],
  imports: [
    CommonModule,
    TeaserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeaserModule {}
