import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'teaser',
    loadChildren: () =>
      import('./teaser/teaser.module').then((m) => m.TeaserModule),
  },
  {
    path: 'reuse',
    loadChildren: () =>
      import('./reuse/reuse.module').then((m) => m.ReuseModule),
  },
  { path: '**', redirectTo: 'home' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
