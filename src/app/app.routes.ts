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
        useValue: 'd41d0218-e711-458d-9346-5c86a0f93b15',
      },
    ],
    component: ViewComponent,
  },
];
