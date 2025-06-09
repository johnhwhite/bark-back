import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/0a4519b7-7942-4c44-8c57-1741f9383bfa',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
