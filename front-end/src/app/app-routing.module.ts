import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresFormComponent } from './fornecedores/fornecedores-form/fornecedores-form/fornecedores-form.component';
import { FornecedoresGridComponent } from './fornecedores/fornecedores-grid/fornecedores-grid.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'cadastrarFornecedor', component: FornecedoresFormComponent},
  {path: 'fornecedores', component: FornecedoresGridComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
