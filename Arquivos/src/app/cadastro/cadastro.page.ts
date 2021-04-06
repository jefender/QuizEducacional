import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async register(){

    // await this.presentLoading();

    // try {
    //   await this.authService.register(this.userRegister);
    // } catch(error) {
    //   let message: string;

    //   switch(error.code) {
    //     case 'auth/email-already-in-use':
    //       message = 'Email já esta em uso!';
    //     break;

    //     case 'auth/invalid-email':
    //       message = 'Email inválido!';
    //     break;
    //   }

    //   this.presentToast(message);
    // } finally {
    //   this.loading.dismiss();
    // }
  }

}
