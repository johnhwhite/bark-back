import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a01e4295-1aa4-421e-aa09-c7f2da7c58ea',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
