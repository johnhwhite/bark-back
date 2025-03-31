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
        useValue: '7c3706b0-dd36-4b84-a66c-3812bebcc55c',
      },
    ],
    component: ViewComponent,
  },
];
