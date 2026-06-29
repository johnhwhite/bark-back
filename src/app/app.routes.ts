import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/fd8a6de9-ff35-4e49-b2a0-5364651afdc5',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
