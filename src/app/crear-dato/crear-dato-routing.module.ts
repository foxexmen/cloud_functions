import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearDatoPage } from './crear-dato.page';

const routes: Routes = [
  {
    path: '',
    component: CrearDatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearDatoPageRoutingModule {}
