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

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  }
  

   addFornecedor(codigoValue: string, nomeFantasiaValue: string, emailValue: string, telefoneValue: string){
     if(this.router.url != "/cadastrarFornecedor"){ 
       let fornecedorAux = new Fornecedor();
       fornecedorAux.Codigo = codigoValue;
       fornecedorAux.NomeFantasia = nomeFantasiaValue;
       fornecedorAux.Email = emailValue;
       fornecedorAux.Telefone = telefoneValue;
       this.fornecedorService.updateFornecedor(fornecedorAux, this.router.url.substring(18)).subscribe();
      }else{
       let fornecedorAux = new Fornecedor();
       fornecedorAux.Codigo = codigoValue;
       fornecedorAux.NomeFantasia = nomeFantasiaValue;
       fornecedorAux.Email = emailValue;
       fornecedorAux.Telefone = telefoneValue;
       console.log(fornecedorAux);
       this.fornecedorService.criateFornecedor(fornecedorAux).subscribe();

      }
    
  }
}
