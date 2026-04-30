import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/41abfb82-ef5b-414b-96de-4bf0a4b5e7c1',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
