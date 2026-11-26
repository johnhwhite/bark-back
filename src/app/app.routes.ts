import { Routes } from '@angular/router';

import { View } from './animal-profiles/view/view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/00aede5c-1fd5-4c2b-9727-1bc6b5ae0ddb',
  },
  {
    path: 'animal-profiles/view/:id',
    component: View,
  },
];
