import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoPageRoutingModule } from './resultado-routing.module';

import { ResultadoPage } from './resultado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoPageRoutingModule
  ],
  declarations: [ResultadoPage]
})
export class ResultadoPageModule {}
