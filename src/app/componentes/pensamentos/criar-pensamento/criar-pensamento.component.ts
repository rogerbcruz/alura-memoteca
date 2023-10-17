import { Pensamento } from '../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)])
      ],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)])
      ],
      modelo: ['modelo3'],
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors);

    if (this.formulario.valid)
      this.service.criar(this.formulario.value).subscribe(() => this.route.navigate(['/listarPensamento']))
  }

  CancelarPensamento() {
    this.route.navigate(['/listarPensamento'])
  }

  habilitaBotao(){
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }

}
