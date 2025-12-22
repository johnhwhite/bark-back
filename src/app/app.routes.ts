import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/e65ec29a-63c7-4ea6-a683-e01832c4ab26',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
