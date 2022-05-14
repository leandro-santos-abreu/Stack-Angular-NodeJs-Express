import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor-service.service';
import Fornecedor from "../../services/models/fornecedor";

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  
  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.fornecedorService.getFornecedores()
      .subscribe((fornecedores: Fornecedor[]) => this.fornecedores = fornecedores);
  }



}
