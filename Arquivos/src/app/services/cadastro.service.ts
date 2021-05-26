import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  public correta; perguntasDb; Pergunta; Resposta1; Resposta2; Resposta3; Resposta4: string;
  
  caminho: string = 'https://jefersonferreira.joomla.com/quizeducacional/php/';

  constructor(public http: HttpClient) { }

  pegarPerguntasBanco(){
    let url = this.caminho + "lerPerguntas.php";
    let headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }

  pegarDadosBanco(){
    this.pegarPerguntasBanco()
    .then ((response:any) =>{
      this.trataDados(response);
    });
  }

  trataDados(dados){
    this.perguntasDb = Object.keys(dados).map(i => dados[i]);
    this.Pergunta = this.perguntasDb[2];
    this.Resposta1 = this.perguntasDb[3];
    this.Resposta2 = this.perguntasDb[4];
    this.Resposta3 = this.perguntasDb[5];
    this.Resposta4 = this.perguntasDb[6];
    this.correta = this.perguntasDb[7];
  }
}
