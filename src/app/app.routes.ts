import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/90279349-1617-4b5a-9eb3-731408f90e1d',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
