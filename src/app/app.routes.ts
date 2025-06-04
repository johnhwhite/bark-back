import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/7bed6f96-3548-48bd-a213-748e52546215',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
