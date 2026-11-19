import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a8600d04-3f8e-49d7-ab9f-4f4b855cc130',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
