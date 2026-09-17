import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a30dd6d1-1ccc-4924-94b5-3ece9ec95fde',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
