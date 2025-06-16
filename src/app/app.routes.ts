import { Routes } from '@angular/router';

import { ViewComponent } from './animal-profiles/view/view.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'animal-profiles/view/d3e440d8-8350-400e-b621-7639a5a2cd0a',
  },
  {
    path: 'animal-profiles/view/:id',
    component: ViewComponent,
  },
];
