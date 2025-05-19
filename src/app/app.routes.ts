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
        useValue: '906cdfb1-1824-4f33-9cbb-dd0049c2886e',
      },
    ],
    component: ViewComponent,
  },
];
