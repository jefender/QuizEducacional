import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrucaoPageRoutingModule } from './instrucao-routing.module';

import { InstrucaoPage } from './instrucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrucaoPageRoutingModule
  ],
  declarations: [InstrucaoPage]
})
export class InstrucaoPageModule {}
