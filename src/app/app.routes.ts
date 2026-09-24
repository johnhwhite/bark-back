import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/94efe8e2-2847-47ff-b1d6-c60b5a4ef1c0',
  },
  {
    path: 'animal-profiles/view/:id',
    loadComponent: () => import('./animal-profiles/view/view-page'),
  },
];
