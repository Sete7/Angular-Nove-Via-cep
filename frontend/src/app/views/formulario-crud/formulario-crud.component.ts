import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-crud',
  templateUrl: './formulario-crud.component.html',
  styleUrls: ['./formulario-crud.component.css']
})
export class FormularioCrudComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  naviGateFormCreate(): void{
    this.router.navigate(['/formulario/create'])
  }

}
