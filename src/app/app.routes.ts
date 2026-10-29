import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/614cbf85-5e9b-4f4f-9602-9947aa8bc044',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
