import { Router, ActivatedRoute } from '@angular/router';
import { FormularioService } from './../formulario.service';
import { Formulario } from './../formulario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-update',
  templateUrl: './formulario-update.component.html',
  styleUrls: ['./formulario-update.component.css']
})
export class FormularioUpdateComponent implements OnInit {

  formulario : Formulario;

  constructor(
    private formularioService: FormularioService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.formularioService.readById(id).subscribe((formulario) => {
      this.formulario = formulario;
    });
  }

  updateFormulario(): void {
    this.formularioService.update(this.formulario).subscribe(() => {
      this.formularioService.showMessage("Endereço atualizado com sucesso!");
      this.router.navigate(["/formulario"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/formulario"]);
  }

}
