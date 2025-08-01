import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/6fa484ea-8350-4f53-be7e-1eac68390838',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
