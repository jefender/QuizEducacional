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

  public correta; perguntasDb; Pergunta1; Resposta1; Resposta2; Resposta3; Resposta4: string;

  constructor(public navCtrl: NavController, public cadastroService: CadastroService) { }

  abrirTela(page){
    this.navCtrl.navigateForward(page)
  }

  ionViewWillEnter(){
    this.inicio();
  }

  inicio(){
    this.errado = 0;
    this.certo = 0;
    this.numero = 0;
    this.caregarPerguntas();
  }

  ngOnInit() {
    this.pegarDadosfirebase();
    this.caregarPerguntas();
  }

  // criacaoquestoes(){
  //   this.questoes = [
  //     {id:1,
  //       pergunta:'Um país que se candidate ao Tratado da União Europeia deve necessariamente:',
  //       resposta:'4',
  //       op1:'Ser republicano e possuir economia de mercado, porém submetida a controles constantes por parte do Fundo Monetário Internacional (FMI)',
  //       op2:'Permanecer fiel à legislação do bloco e delegar suas questões de segurança nacional à Organização do Tratado do Atlântico Norte (OTAN)',
  //       op3:'Possuir regime monarquista de governo, aceitar a política econômica do bloco e se comprometer a utilizar o Euro',
  //       op4:'Estar situado na Europa Ocidental e substituir sua Câmara de Deputados e seu Senado pelo Parlamento Europeu',
  //       op5:'Ter instituições estáveis que garantam a democracia, o Estado de direito e o respeito aos direitos humanos'
  //     },
  //     {id:2,
  //       pergunta:'Um país que se candidate ao Tratado da União Europeia deve necessariamente:',
  //       resposta:'4',
  //       op1:'Ser republicano e possuir economia de mercado, porém submetida a controles constantes por parte do Fundo Monetário Internacional (FMI)',
  //       op2:'Permanecer fiel à legislação do bloco e delegar suas questões de segurança nacional à Organização do Tratado do Atlântico Norte (OTAN)',
  //       op3:'Possuir regime monarquista de governo, aceitar a política econômica do bloco e se comprometer a utilizar o Euro',
  //       op4:'Estar situado na Europa Ocidental e substituir sua Câmara de Deputados e seu Senado pelo Parlamento Europeu',
  //       op5:'Ter instituições estáveis que garantam a democracia, o Estado de direito e o respeito aos direitos humanos'
  //     },
  //     {id:3,
  //       pergunta:'Um país que se candidate ao Tratado da União Europeia deve necessariamente:',
  //       resposta:'4',
  //       op1:'Ser republicano e possuir economia de mercado, porém submetida a controles constantes por parte do Fundo Monetário Internacional (FMI)',
  //       op2:'Permanecer fiel à legislação do bloco e delegar suas questões de segurança nacional à Organização do Tratado do Atlântico Norte (OTAN)',
  //       op3:'Possuir regime monarquista de governo, aceitar a política econômica do bloco e se comprometer a utilizar o Euro',
  //       op4:'Estar situado na Europa Ocidental e substituir sua Câmara de Deputados e seu Senado pelo Parlamento Europeu',
  //       op5:'Ter instituições estáveis que garantam a democracia, o Estado de direito e o respeito aos direitos humanos'
  //     },
  //     {id:4,
  //       pergunta:'Em Matemática, no estudo de funções, a parábola é uma curva que representa uma função polinomial:',
  //       resposta:'5',
  //       op1:'Constante e sua expressão geral é dada por f(x) = a, com a ≠ 0',
  //       op2:'De 1º grau e sua expressão geral é dada por f(x) = ax + b, com a ≠ 0.',
  //       op3:'De 1º grau e sua expressão geral é dada por f(x) = ax² + bx + c, com a ≠ 0',
  //       op4:'De 2º grau e sua expressão geral é dada por f(x) = ax + b, com a ≠ 0',
  //       op5:'De 2º grau e sua expressão geral é dada por f(x) = ax² + bx + c, com a ≠ 0'
  //     },
  //     {id:5,
  //       pergunta:'A quantia de R$ 1.143,00 representa qual porcentagem de R$ 2.540,00?',
  //       resposta:'1',
  //       op1:'A quantia de R$ 1143,00 representa 45%',
  //       op2:'A quantia de R$ 1143,00 representa 55%',
  //       op3:'A quantia de R$ 1143,00 representa 47%',
  //       op4:'A quantia de R$ 1143,00 representa 50%',
  //       op5:'Nenhuma das anterioress'
  //     }
  //   ]
  // }

  // caregarPerguntas(){
  //   this.pegarDadosfirebase();
  //   this.pergunta = this.questoes[this.numero].pergunta;
  //   this.resposta = this.questoes[this.numero].resposta;
  //   this.opcao01 = this.questoes[this.numero].op1;
  //   this.opcao02 = this.questoes[this.numero].op2;
  //   this.opcao03 = this.questoes[this.numero].op3;
  //   this.opcao04 = this.questoes[this.numero].op4;
  //   this.opcao05 = this.questoes[this.numero].op5;
  // }

  caregarPerguntas(){
    this.pegarDadosfirebase();
    this.pergunta = this.Pergunta1;
    this.resposta = this.correta;
    this.opcao01 = this.Resposta1;
    this.opcao02 = this.Resposta2;
    this.opcao03 = this.Resposta3;
    this.opcao04 = this.Resposta4;
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
    if(this.numero >= 4){
      this.navCtrl.navigateForward("resultado");
      localStorage.setItem('Certo', this.certo);
      localStorage.setItem('Errado', this.errado);
    }else{
      this.numero++;
      this.caregarPerguntas();
    }
  }

  pegarDadosfirebase(){
    this.cadastroService.pegarDadosfirebase()
    .then ((response:any) =>{
      this.trataDados(response);
    });
  }

  trataDados(dados){
    this.perguntasDb = Object.keys(dados).map(i => dados[i]);
    this.correta = this.perguntasDb[0];
    this.Pergunta1 = this.perguntasDb[1];
    this.Resposta1 = this.perguntasDb[2];
    this.Resposta2 = this.perguntasDb[3];
    this.Resposta3 = this.perguntasDb[4];
    this.Resposta4 = this.perguntasDb[5];
  }
}
