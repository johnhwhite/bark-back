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
        useValue: '2bbc2fea-f3e4-4da0-b4b1-c3fc65c8b956',
      },
    ],
    component: ViewComponent,
  },
];
