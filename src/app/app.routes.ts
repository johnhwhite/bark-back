import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/c2e181ca-96bb-48ba-8763-7801a298de04',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
