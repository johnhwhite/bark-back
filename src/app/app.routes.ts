import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/64d02f88-5c9a-4c8a-841e-aa555cf6cc1f',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
