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
        pergunta:'O Primeiro Filme de qual vingador deu início aos vingadores?',
        resposta:'3',
        op1:'Homem de Ferro',
        op2:'Hulk',
        op3:'Capitão América',
        op4:'Thor',
        op5:'Batmam'
      },
      {id:2,
        pergunta:'Qual o nome da primeira armadura do Homem de Ferro?',
        resposta:'1',
        op1:'Mark1',
        op2:'Tony Enlatado',
        op3:'Armor 1',
        op4:'Lata Velha',
        op5:'Jarvas'
      },
      {id:3,
        pergunta:'Como o personagem Steve Rogers se tornou o Capitão América?',
        resposta:'2',
        op1:'Treinando',
        op2:'Com o Soro do Super Soldado',
        op3:'A partir da Fonte da Juventude',
        op4:'A partir do seu escudo',
        op5:'Quando ele encontrou o Martelo'
      },
      {id:4,
        pergunta:'Qual o nome do martelo do Thor?',
        resposta:'3',
        op1:'Hammer',
        op2:'Powerful',
        op3:'Mjolnir',
        op4:'Raio de Saudade',
        op5:'Thunder'
      },
      {id:5,
        pergunta:'Qual o verdadeiro nome da personagem Viúva Negra nos filmes?',
        resposta:'5',
        op1:'Natasha Johansson',
        op2:'Viúva Negra',
        op3:'Scarlet Johansson',
        op4:'Scarlet Romanoff',
        op5:'Natacha Romanoff'
      },
      {id:6,
        pergunta:'Qual foi a Joia do Infinito que apareceu no segundo filme do Thor?',
        resposta:'3',
        op1:'Tempo',
        op2:'Espaço',
        op3:'Realidade',
        op4:'Alma',
        op5:'Poder'
      },
      {id:7,
        pergunta:'Qual ator fez o Visão no filme da Marvel?',
        resposta:'5',
        op1:'Cris Evans',
        op2:'Josh Brolin',
        op3:'Tom Holland',
        op4:'Peter Parker',
        op5:'Paul Battany'
      },
      {id:8,
        pergunta:'O Doutor Estranho é?',
        resposta:'3',
        op1:'Cirurgião Bariatrico',
        op2:'Médico',
        op3:'Neurocirurgião',
        op4:'cirurgião Plástico',
        op5:'Pediatra'
      },
      {id:9,
        pergunta:'Quem se Sacrifica para Conseguir a joia da alma?',
        resposta:'4',
        op1:'Capitã Marvel',
        op2:'Gavião Arqueiro',
        op3:'Ronin',
        op4:'Viúva Negra',
        op5:'Homem aranha'
      },
      {id:10,
        pergunta:'Qual ator fez o Loki no filme da Marvel?',
        resposta:'5',
        op1:'Sebastian Stan',
        op2:'Benedict Wong',
        op3:'Dave Bautista',
        op4:'Jeremy Renner',
        op5:'Tom Hiddleston'
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
    if(this.numero >= 9){
      this.navCtrl.navigateForward("resultado");
      localStorage.setItem('Certo', this.certo);
      localStorage.setItem('Errado', this.errado);
    }else{
      this.numero++;
      this.caregarPerguntas();
    }
  }

}
