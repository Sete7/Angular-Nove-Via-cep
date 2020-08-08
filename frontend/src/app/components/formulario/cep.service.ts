import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseUrl = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) { }


  cep(cep: string): Observable<any>{
    return this.http.get(this.baseUrl + cep + '/json/');    
  }

}
