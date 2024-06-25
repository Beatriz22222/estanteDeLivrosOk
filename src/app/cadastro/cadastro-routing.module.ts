import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cadastroPage } from './cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: cadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPageRoutingModule {}
