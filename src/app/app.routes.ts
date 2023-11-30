import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home:code',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'android/communicate/auth',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  }
];
