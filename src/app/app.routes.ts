import { Routes } from '@angular/router';
import { ID } from './types/id';
import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [
      {
        provide: ID,
        useValue: 'a4e3aecd-766c-48fb-8eec-8fbdfdd160e0',
      },
    ],
    component: ViewComponent,
  },
];
