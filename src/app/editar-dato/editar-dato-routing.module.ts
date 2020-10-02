import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDatoPage } from './editar-dato.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDatoPageRoutingModule {}
