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
        useValue: 'd31400f7-8fd2-4e2c-a025-20a71527fa6c',
      },
    ],
    component: ViewComponent,
  },
];
