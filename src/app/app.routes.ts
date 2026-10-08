import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/b03a4f1f-dc4c-4509-a490-5b0341e7b587',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
