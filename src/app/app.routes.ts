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
        useValue: 'd4352a8e-1d84-4cb9-8780-0a526b585b9b',
      },
    ],
    component: ViewComponent,
  },
];
