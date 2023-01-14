import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'GitHub Page Replacer',
    loadComponent: () =>
      import('./components/main/main.component').then((m) => m.MainComponent),
  },
];
