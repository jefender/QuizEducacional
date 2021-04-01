import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
  }

  public userLogin: User = {};
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public controleAlerta: AlertController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

  async login() {

    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch(error) {
      let message: string;

      switch(error.code) {
        case 'auth/wrong-password':
          message = 'Senha inválida!';
        break;

        case 'auth/user-not-found':
          message = 'Usuário não existe!';
        break;

        case 'auth/invalid-email':
          message = 'Email inválido!';
        break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
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
