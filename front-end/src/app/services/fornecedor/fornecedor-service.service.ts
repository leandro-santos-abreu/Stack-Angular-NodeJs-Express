import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Fornecedor from '../models/fornecedor';
import { WebService } from '../web.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {


  constructor(private webService: WebService, private router: Router) { }

  getFornecedores(){
    return this.webService.get('fornecedores');
  }

  criateFornecedor(fornecedor: Fornecedor){
    const bodyReq = JSON.stringify(fornecedor);
    console.log(bodyReq);
    return this.webService.post('fornecedores', bodyReq);
  }
  
}
