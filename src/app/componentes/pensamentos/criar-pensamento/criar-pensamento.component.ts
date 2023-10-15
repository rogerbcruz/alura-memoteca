import { Pensamento } from '../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '1'
  }
  constructor(
    private service: PensamentoService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe( () => this.route.navigate(['/listarPensamento']))
  }

  CancelarPensamento() {
    this.route.navigate(['/listarPensamento'])
  }

}
