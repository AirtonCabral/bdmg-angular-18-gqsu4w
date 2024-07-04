import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  baseRef = 'https://viacep.com.br/ws/';
  route = { 
    buscaCep: (cep: string) => `${this.baseRef}${cep}/json/`
  }
  constructor(
    private http: HttpClient
  ) { }

  getEndereco(cep: string) {
    return this.http.get<any>(this.route.buscaCep(cep))
  }
}
