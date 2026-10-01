import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/bf66cad8-51d3-4ab4-969d-6630fdcbce5c',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
