import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { checkServerIdentity } from 'tls';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string = '';
  resposta: string = '';
  revelar: string[] = ["display: none;", "font-size: 24px; font-weight: bold; text-align: end;"];
  nivel: number = 0;
  animacao: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
    this.exibirResposta();
  }

  exibirResposta(){
   this.nivel = 1;
  }

  solicitarCharada(){
    this.animacao = false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe( response => {
      this.pergunta = response[0].pergunta;
      
      this.resposta = response[0].resposta;
      this.animacao = true;
      this.nivel = 0;
    });
  }

  
}
