import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/aecaf933-0cda-4106-ab8d-b6ed7285ef48',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
