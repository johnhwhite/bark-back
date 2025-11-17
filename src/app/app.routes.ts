import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/719137f5-31e0-471e-b443-bec6386773ac',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
