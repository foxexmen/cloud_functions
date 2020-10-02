import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'crear-dato', loadChildren: () => import('./crear-dato/crear-dato.module').then( m => m.CrearDatoPageModule) },
  { path: 'editar-dato', loadChildren: () => import('./editar-dato/editar-dato.module').then( m => m.EditarDatoPageModule) },
  {
    path: 'mostrar',
    loadChildren: () => import('./mostrar/mostrar.module').then( m => m.MostrarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
