import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearDatoPageRoutingModule } from './crear-dato-routing.module';

import { CrearDatoPage } from './crear-dato.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearDatoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CrearDatoPage]
})
export class CrearDatoPageModule {}
