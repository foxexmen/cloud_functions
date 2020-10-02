import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MostrarPage } from './mostrar.page';


import { MostrarPageRoutingModule } from './mostrar-routing.module';
import {HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPageRoutingModule,
   


  ],
  providers:[
    HttpClient,
  
  ],
  declarations: [MostrarPage]
})
export class MostrarPageModule {}
