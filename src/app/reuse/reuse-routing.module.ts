import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReuseableMenuExampleComponent } from './reuseable-menu-example/reuseable-menu-example.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: ReuseableMenuExampleComponent,
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuseRoutingModule {}
