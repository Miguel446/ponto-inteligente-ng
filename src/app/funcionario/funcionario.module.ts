import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FuncionarioComponent, ListagemComponent, LancamentoComponent } from './components';

@NgModule({
  declarations: [FuncionarioComponent, ListagemComponent, LancamentoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FuncionarioModule { }
