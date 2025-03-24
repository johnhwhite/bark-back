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
        useValue: 'a2b1511e-b01f-4511-b1a6-c08da84e983f',
      },
    ],
    component: ViewComponent,
  },
];
