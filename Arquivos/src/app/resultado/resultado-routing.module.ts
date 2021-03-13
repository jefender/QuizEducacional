import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoPage } from './resultado.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoPageRoutingModule {}
