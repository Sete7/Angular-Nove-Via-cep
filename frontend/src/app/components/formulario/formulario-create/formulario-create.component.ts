import { CepService } from './../cep.service';
import { Formulario } from './../formulario.model';
import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.css']
})

export class FormularioCreateComponent implements OnInit {

  formulario: Formulario = {
    cep: '',
    uf: '',
    cidade: ''
  }

  constructor( private formService: FormularioService,
      private router: Router, private cepService: CepService ) { }

  ngOnInit(): void {
    
  }

  createEndereco(): void {    
    this.formService.create(this.formulario).subscribe(() => {
      this.formService.showMessage('Cadastro efetuado com sucesso!')
      this.router.navigate(['/formulario'])
    })

  }

  cancel(): void {
    this.router.navigate(['/formulario'])
  }

  consultaCep(cep){
    cep = cep.replace(/\D/g, '');
    
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) { 

        this.cepService.cep(cep).subscribe(data => {
          this.formulario.uf = data['uf'];
          this.formulario.cidade = data['bairro']
          console.info(data);
        })
      } else {
        //CEP pesquisado não foi encontrado.
        //limpa_formulário_cep();
        this.formService.showMessage('CEP não encontrado.');
      }
    }

    if(cep == ""){
      this.formService.showMessage('Campo obrigatório!');
      this.router.navigate(['/formulario'])
    }
    
  }


}

