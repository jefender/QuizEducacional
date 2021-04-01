import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  ngOnInit() {
  }

  public fGroup: FormGroup;
  public userRegister: User = {};
  private loading: any;

  constructor(
    private fBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) {
    this.fGroup = this.fBuilder.group({
      'name': [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      'repassword': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  async register(){

    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch(error) {
      let message: string;

      switch(error.code) {
        case 'auth/email-already-in-use':
          message = 'Email já esta em uso!';
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
}

/*
  Itens que ainda falta:
+ Validar que as senhas digitadas no campo senha e confirma senha sejam identicas
+ Add esqueci minha senha
*/
