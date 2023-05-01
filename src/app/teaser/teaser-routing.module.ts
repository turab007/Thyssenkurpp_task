import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaserMainComponent } from './teaser-main/teaser-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: TeaserMainComponent,
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaserRoutingModule {}
