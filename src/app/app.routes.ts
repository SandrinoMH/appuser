import { Routes } from '@angular/router';
import { App } from './app';
import { Details } from './details/details';
import { Home } from './home/home';

export const routeConfig: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'detail/:id',
    component: Details,
  },
];

export default routeConfig;
