import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};

  constructor(
    public navCtrl: NavController,
    public controleAlerta: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  login () {

  }

  abrirTela(page){
    this.navCtrl.navigateForward(page)
  }

  async alertaConfirma(){
    const alert = await this.controleAlerta.create({
      header: 'QuizApp',
      message: 'Deseja realmente sair? <br> O aplicativo perderá algumas funcionalidades.',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'secundary',
          handler: () => {
            this.navCtrl.navigateForward('folder/Inbox')
          }
        },
        {
          text: 'Não',
          role: 'não',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }
}
