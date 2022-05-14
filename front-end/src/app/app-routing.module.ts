import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from 'src/app/app.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild([
			{path:'',component: AppComponent}
		])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
