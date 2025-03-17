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
        useValue: '9143bcd0-4992-4b8c-afd6-2168c14d637c',
      },
    ],
    component: ViewComponent,
  },
];
