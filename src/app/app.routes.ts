import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/ccf6596c-3b55-4325-9c56-1237a02a3711',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
