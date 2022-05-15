import { Injectable } from '@angular/core';
import { WebService } from '../web.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private webService: WebService) { }

  getFornecedores(){
    return this.webService.get('fornecedores');
  }

  deleteFornecedor(Codigo:string){
    return this.webService.delete(`fornecedores/${Codigo}`);
  }
  
}
