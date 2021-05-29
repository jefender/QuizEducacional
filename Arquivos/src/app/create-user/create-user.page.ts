import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
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
    public navCtrl: NavController,
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
      'lastname': [null, Validators.compose([
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
        Validators.minLength(6),
        Validators.maxLength(10)
      ])],
      'repassword': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])]
    });
  }

  register(){

    if (this.userRegister.senha == this.userRegister.repassword){

      this.presentLoading();
      this.authService.adicionarUsuario(this.userRegister)

      .then ((resposta: any)=>{
        let message: string;
        switch(resposta.Resp){
          case '1':
            message = 'Email já esta em uso!';
            break
          case '0':
            localStorage.setItem('user',  resposta.token);
            message = 'Usuário Cadastrado com sucesso!';
            this.navCtrl.navigateRoot('folder/Inbox');
            break
        }
        this.presentToast(message);
        this.loading.dismiss();
      })
      .catch((resposta) =>{
        let message: string;
        message = 'Servidor não encontrado!!';
        this.presentToast(message);
        this.loading.dismiss();
      });

    }else{
      let message = 'As senhas não estão idênticas!';
      this.presentToast(message);
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
