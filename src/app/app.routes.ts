import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/projetos',
    pathMatch: 'full'
  },
  {
    path: 'projetos',
    loadComponent: () => import('./pages/lista-projetos/lista-projetos.component').then(m => m.ListaProjetosComponent)
  }
];
