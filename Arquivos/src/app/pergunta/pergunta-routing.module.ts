import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntaPage } from './pergunta.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntaPageRoutingModule {}
