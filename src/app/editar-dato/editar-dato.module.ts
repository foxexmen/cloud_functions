import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditarDatoPageRoutingModule } from './editar-dato-routing.module';

import { EditarDatoPage } from './editar-dato.page';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDatoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [EditarDatoPage]
})
export class EditarDatoPageModule {}
