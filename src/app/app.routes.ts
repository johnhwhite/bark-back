import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/113090eb-af73-46ba-aa46-edc3aaa0656d',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
