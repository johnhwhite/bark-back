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
        useValue: '09743657-4a6a-45f9-9d78-b395ec4a1aed',
      },
    ],
    component: ViewComponent,
  },
];
