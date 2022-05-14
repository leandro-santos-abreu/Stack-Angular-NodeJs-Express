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
  
}
