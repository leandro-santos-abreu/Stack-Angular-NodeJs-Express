import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FornecedoresComponent } from './fornecedores/fornecedores/fornecedores.component';
import { FornecedoresFormComponent } from './fornecedores/fornecedores-form/fornecedores-form/fornecedores-form.component';
import { MenuComponent } from './menu/menu/menu.component';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    FornecedoresComponent,
    FornecedoresFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
