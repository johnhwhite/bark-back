import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/3caa5102-52d5-4a27-ae7d-692fd8e72a18',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
