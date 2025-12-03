import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a9bcfec1-c549-4957-909e-54f20ee0dda5',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
