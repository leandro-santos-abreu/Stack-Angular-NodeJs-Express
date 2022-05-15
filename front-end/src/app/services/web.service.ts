import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_ULR;
  constructor(private http: HttpClient) {
    this.ROOT_ULR = "http://localhost:3000";
  }

  get(uri: string){
    return this.http.get(`${this.ROOT_ULR}/${uri}`);
  }

  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_ULR}/${uri}`, payload, {headers: {'Content-Type': 'application/json'}});
  }

  put(uri: string, payload: Object){
    return this.http.put(`${this.ROOT_ULR}/${uri}`, payload);
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_ULR}/${uri}`);
  }
}
