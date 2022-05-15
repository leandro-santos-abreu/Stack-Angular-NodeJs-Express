import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor-service.service';
import  Fornecedor  from 'src/app/services/models/fornecedor';


@Component({
  selector: 'app-fornecedores-form',
  templateUrl: './fornecedores-form.component.html',
  styleUrls: ['./fornecedores-form.component.scss']
})
export class FornecedoresFormComponent implements OnInit {

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
  }
  

   addFornecedor(codigoValue: string, nomeFantasiaValue: string, emailValue: string, telefoneValue: string){
    let fornecedorAux = new Fornecedor();
    fornecedorAux.codigo = codigoValue;
    fornecedorAux.nomeFantasia = nomeFantasiaValue;
    fornecedorAux.email = emailValue;
    fornecedorAux.telefone = telefoneValue;
    console.log(fornecedorAux);
    this.fornecedorService.criateFornecedor(fornecedorAux).subscribe();
  }
}
