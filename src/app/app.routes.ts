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
        useValue: '330b57ce-92a4-41a7-b101-f5b39f11c2bc',
      },
    ],
    component: ViewComponent,
  },
];
