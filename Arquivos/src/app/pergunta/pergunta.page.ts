import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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
  respostaEscolhida: string = "";
  certo: any = 0;
  errado: any = 0;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
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

  proximo(){
    if(this.respostaEscolhida ==""){
      let message: string;
      message = 'Por Favor. Escolha uma das opções!';
      this.presentToast(message);
      return false;
    }

    if(this.respostaEscolhida == this.resposta){
      this.certo++;
      this.respostaEscolhida="";
    }else{
      this.errado++;
      this.respostaEscolhida="";
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

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  
}
