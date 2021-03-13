import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntaPageRoutingModule } from './pergunta-routing.module';

import { PerguntaPage } from './pergunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntaPageRoutingModule
  ],
  declarations: [PerguntaPage]
})
export class PerguntaPageModule {}
