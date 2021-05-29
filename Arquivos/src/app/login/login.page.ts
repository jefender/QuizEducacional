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
  userLocal: any;

  constructor(
    public navCtrl: NavController,
    public controleAlerta: AlertController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

  async login() {

    if (this.userLogin.email == undefined || this.userLogin.email == '' ||this.userLogin.senha == undefined || this.userLogin.senha == '' ) {
      let message: string;
      message = 'Por favor, preencher os campos necessários';
      this.presentToast(message);
    }else{

    await this.presentLoading();
    await this.authService.login(this.userLogin)
    .then((resposta: any) => {
      let message: string;
        switch(resposta.Resp) {
        case '0':
          message = 'E-mail ou Senha Inválidos!';
        break;

        case '1':
          localStorage.setItem('user',  resposta.token);
          this.navCtrl.navigateForward('folder/Inbox')
          message = 'Login efetuado com sucesso!';
      break;
        }
        this.presentToast(message);
        this.loading.dismiss();
    })
    .catch((resposta) => {
      let message: string;
      message = 'Servidor não encontrado. Tente mais tarde!';
      this.presentToast(message);
    });
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
      header: 'Quiz Educacional',
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
