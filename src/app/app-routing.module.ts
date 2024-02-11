import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/personaje/personaje.module').then((m) => m.PersonajeModule),
  },
  {
    path: '',
    loadChildren: () => import('./core/components/core.module').then((m) => m.CoreModule),
  },
  {
    path: '**', redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
