import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-instrucao',
  templateUrl: './instrucao.page.html',
  styleUrls: ['./instrucao.page.scss'],
})
export class InstrucaoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirTela(page){
    this.navCtrl.navigateForward(page)
  }

}
