import { Formulario } from './../formulario.model';
import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-read',
  templateUrl: './formulario-read.component.html',
  styleUrls: ['./formulario-read.component.css']
})

export class FormularioReadComponent implements OnInit {

  formulario: Formulario[]
  displayedColumns = ['id', 'cep', 'uf', 'cidade', 'action']

  constructor(private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.formularioService.read().subscribe(formulario => {
      this.formulario = formulario
  })


  }

}
