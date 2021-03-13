import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  recebeCerto: any;
  recebeErrado: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.recebeCerto = localStorage.getItem('Certo');
    this.recebeErrado = localStorage.getItem('Errado')
  }

  voltarInicio(){
    this.navCtrl.navigateForward("pergunta")
  }

}
