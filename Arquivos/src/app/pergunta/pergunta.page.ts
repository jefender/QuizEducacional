import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})
export class PerguntaPage implements OnInit {

  id: number;
  pergunta: string;
  resposta: string;
  opcao01: string;
  opcao02: string;
  opcao03: string;
  opcao04: string;
  numero: number = 0;
  respostaEscolhida: string;
  certo: any = 0;
  errado: any = 0;

  // public correta; perguntasDb; Pergunta; Resposta1; Resposta2; Resposta3; Resposta4: string;

  constructor(
    public navCtrl: NavController,
    public cadastroService: CadastroService
    ) { }

  abrirTela(page){
    this.navCtrl.navigateForward(page)
  }

  ionViewWillEnter(){
    this.inicio();
  }

  ngOnInit() {
    this.inicio();
  }

  inicio(){
    this.errado = 0;
    this.certo = 0;
    this.numero = 0;
    this.caregarPerguntas();
  }

  caregarPerguntas(){
    this.cadastroService.pegarDadosBanco();
    this.pergunta = this.cadastroService.Pergunta;
    this.resposta = this.cadastroService.correta;
    this.opcao01 = this.cadastroService.Resposta1;
    this.opcao02 = this.cadastroService.Resposta2;
    this.opcao03 = this.cadastroService.Resposta3;
    this.opcao04 = this.cadastroService.Resposta4;
  }

  pegarResposta(valor){
    this.respostaEscolhida = valor;
  }

  proximo(){
    if(this.respostaEscolhida == this.resposta){
      this.certo++;
    }else{
      this.errado++;
    }
    if(this.numero >= 9){
      this.navCtrl.navigateForward("resultado");
      localStorage.setItem('Certo', this.certo);
      localStorage.setItem('Errado', this.errado);
    }else{
      this.numero++;
      this.caregarPerguntas();
    }
  }

  // pegarDadosBanco(){
  //   this.cadastroService.pegarPerguntasBanco()
  //   .then ((response:any) =>{
  //     this.trataDados(response);
  //   });
  // }

  // trataDados(dados){
  //   this.perguntasDb = Object.keys(dados).map(i => dados[i]);
  //   this.Pergunta = this.perguntasDb[2];
  //   this.Resposta1 = this.perguntasDb[3];
  //   this.Resposta2 = this.perguntasDb[4];
  //   this.Resposta3 = this.perguntasDb[5];
  //   this.Resposta4 = this.perguntasDb[6];
  //   this.correta = this.perguntasDb[7];
  // }
}
