import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrucaoPage } from './instrucao.page';

const routes: Routes = [
  {
    path: '',
    component: InstrucaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrucaoPageRoutingModule {}
