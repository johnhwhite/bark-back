import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/e8ea726b-9519-4e55-8ef9-b26572b46e65',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
