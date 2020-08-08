import { Formulario } from './../formulario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-delete',
  templateUrl: './formulario-delete.component.html',
  styleUrls: ['./formulario-delete.component.css']
})
export class FormularioDeleteComponent implements OnInit {

  formulario: Formulario;

  constructor(

    private formularioService: FormularioService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.formularioService.readById(id).subscribe((formulario) => {
      this.formulario = formulario;
    });
  }

  deleteFormulario(): void {
    this.formularioService.delete(this.formulario.id).subscribe(() => {
      this.formularioService.showMessage("Endereço excluido com sucesso!");
      this.router.navigate(["/formulario"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/formulario"]);
  }

}
