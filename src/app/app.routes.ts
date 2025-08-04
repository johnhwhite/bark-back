import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/cbf7876d-56d2-49e8-955f-6d27299b3b8d',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
