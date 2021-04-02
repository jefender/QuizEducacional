import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(public navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
  }

  abrirTela(page){
    this.navCtrl.navigateForward(page)
  }

  async logout(){
    await this.authService.logout();
  }

}
