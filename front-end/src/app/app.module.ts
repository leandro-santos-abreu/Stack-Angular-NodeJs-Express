import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button'; 
import {SplitButtonModule} from 'primeng/splitbutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FornecedoresFormComponent } from './fornecedores/fornecedores-form/fornecedores-form/fornecedores-form.component';
import { MenuComponent } from './menu/menu/menu.component';
import {MenuModule} from 'primeng/menu';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { FornecedoresGridComponent } from './fornecedores/fornecedores-grid/fornecedores-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    FornecedoresFormComponent,
    MenuComponent,
    FornecedoresGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    MenuModule,
    SplitButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
