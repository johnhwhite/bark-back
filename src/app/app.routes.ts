import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/ac39f4ac-f279-4930-b5b2-3cf344d763be',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
