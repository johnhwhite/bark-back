import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/87c6c7f0-6311-4348-82e6-36ec74b9b1a2',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
