import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  opcao05: string;
  questoes: any;
  numero: number = 0;
  respostaEscolhida: string;
  certo: any = 0;
  errado: any = 0;

  constructor(public navCtrl: NavController) { }

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
    this.criacaoquestoes();
    this.caregarPerguntas();
  }


  criacaoquestoes(){
    this.questoes = [
      {id:1,
        pergunta:'O Tratado da União Europeia estabelece que qualquer país europeu pode se candidatar à adesão ao bloco. Porém, um país só pode entrar na União Europeia se cumprir alguns critérios de adesão. Um país que se candidate a membro desse bloco econômico deve necessariamente:',
        resposta:'4',
        op1:'Ser republicano e possuir economia de mercado, porém submetida a controles constantes por parte do Fundo Monetário Internacional (FMI)',
        op2:'Permanecer fiel à legislação do bloco e delegar suas questões de segurança nacional à Organização do Tratado do Atlântico Norte (OTAN)',
        op3:'Possuir regime monarquista de governo, aceitar a política econômica do bloco e se comprometer a utilizar o Euro',
        op4:'Estar situado na Europa Ocidental e substituir sua Câmara de Deputados e seu Senado pelo Parlamento Europeu',
        op5:'Ter instituições estáveis que garantam a democracia, o Estado de direito e o respeito aos direitos humanos'
      },
      {id:2,
        pergunta:'Para que servem as multiplicações?',
        resposta:'3',
        op1:'Multiplicar números iguais e agilizar as contas de divisão',
        op2:'Tornar as contas mais fáceis',
        op3:'Facilitar as contas que envolvem grandes quantidades de soma',
        op4:'Servem para multiplicar',
        op5:'Nenhuma das anteriores'
      },
      {id:3,
        pergunta:'O que seria uma Onomatopeia?',
        resposta:'2',
        op1:'Palavras que rimam',
        op2:'Uso de palavras para representar um Som',
        op3:'Composição de palavras que tem o mesmo Som',
        op4:'Atribuição de características humanas a animais ou objetos',
        op5:'Nenhuma das anteriores'
      },
      {id:4,
        pergunta:'Em Matemática, no estudo de funções, a parábola é uma curva que representa uma função polinomial:',
        resposta:'5',
        op1:'Constante e sua expressão geral é dada por f(x) = a, com a ≠ 0',
        op2:'De 1º grau e sua expressão geral é dada por f(x) = ax + b, com a ≠ 0.',
        op3:'De 1º grau e sua expressão geral é dada por f(x) = ax² + bx + c, com a ≠ 0',
        op4:'De 2º grau e sua expressão geral é dada por f(x) = ax + b, com a ≠ 0',
        op5:'De 2º grau e sua expressão geral é dada por f(x) = ax² + bx + c, com a ≠ 0'
      },
      {id:5,
        pergunta:'A quantia de R$ 1.143,00 representa qual porcentagem de R$ 2.540,00?',
        resposta:'1',
        op1:'A quantia de R$ 1143,00 representa 45%',
        op2:'A quantia de R$ 1143,00 representa 55%',
        op3:'A quantia de R$ 1143,00 representa 47%',
        op4:'A quantia de R$ 1143,00 representa 50%',
        op5:'Nenhuma das anteriores'
      }
    ]
  }

  caregarPerguntas(){
    this.pergunta = this.questoes[this.numero].pergunta;
    this.resposta = this.questoes[this.numero].resposta;
    this.opcao01 = this.questoes[this.numero].op1;
    this.opcao02 = this.questoes[this.numero].op2;
    this.opcao03 = this.questoes[this.numero].op3;
    this.opcao04 = this.questoes[this.numero].op4;
    this.opcao05 = this.questoes[this.numero].op5;
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
}
