import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/18f09ac9-768c-4cb7-8d24-182ec70b2e61',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
