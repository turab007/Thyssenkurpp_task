import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TeaserModule } from './teaser/teaser.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  {
    path: 'teaser',
    loadChildren: () =>
      import('./teaser/teaser.module').then((m) => m.TeaserModule),
  },
  { path: '**', redirectTo: 'home' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
