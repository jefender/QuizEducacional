import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(
    public cadastroService: CadastroService,
    public navCtrl: NavController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.cadastroService.pegarDadosBanco();
  }

  abrirTela(page){
    this.navCtrl.navigateForward(page);
  }

  abrirTelaPergunta(page){
    this.cadastroService.pegarDadosBanco();
    this.navCtrl.navigateForward(page);
  }

  async logout(){
    await this.authService.logout();
  }

}
