import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/3520c2a6-488a-4114-b151-1fa574d83b24',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
