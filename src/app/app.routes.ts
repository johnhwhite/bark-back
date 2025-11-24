import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/a0e52a33-b5cb-457f-8ff5-12e94d573830',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
