import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedoresFormComponent } from './fornecedores/fornecedores-form/fornecedores-form/fornecedores-form.component';
import { FornecedoresComponent } from './fornecedores/fornecedores/fornecedores.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'cadastrarFornecedor', component: FornecedoresFormComponent},
  {path: 'fornecedores', component: FornecedoresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
