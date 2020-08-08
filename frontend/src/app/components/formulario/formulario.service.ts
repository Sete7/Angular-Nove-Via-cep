import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Formulario } from "./formulario.model";
import { Observable, EMPTY, from } from "rxjs";
//import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  baseUrl = "http://localhost:3001/formulario";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(formulario: Formulario): Observable<Formulario>{
    return this.http.post<Formulario>(this.baseUrl, formulario)
    
  }

  read(): Observable<Formulario[]>{
    return this.http.get<Formulario[]>(this.baseUrl);
  }

  readById(id: number): Observable<Formulario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Formulario>(url)
    
  }

  update(Formulario: Formulario): Observable<Formulario> {
    const url = `${this.baseUrl}/${Formulario.id}`;
    return this.http.put<Formulario>(url, Formulario)
    
  }

  delete(id: number): Observable<Formulario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Formulario>(url)
    
  }


}
