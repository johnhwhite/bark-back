import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a724acc9-2d63-4028-aed5-a3638fe8ccf0',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
