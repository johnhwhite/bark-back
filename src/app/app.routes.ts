import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/7a1d905c-c7bb-4a34-bcae-f2a58c075556',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
