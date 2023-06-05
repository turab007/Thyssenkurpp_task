import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReuseRoutingModule } from './reuse-routing.module';
import { ReuseableMenuComponent } from './reuseable-menu/reuseable-menu.component';
import { ReuseableMenuExampleComponent } from './reuseable-menu-example/reuseable-menu-example.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ReuseableMenuComponent,
    ReuseableMenuExampleComponent
  ],
  imports: [
    CommonModule,
    ReuseRoutingModule,
    MaterialModule
  ]
})
export class ReuseModule { }
