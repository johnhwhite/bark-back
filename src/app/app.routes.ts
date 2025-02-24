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
        useValue: '6fceef1a-d00d-422f-99ac-035660ad732a',
      },
    ],
    component: ViewComponent,
  },
];
