import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  caminho: string = 'https://jefersonferreira.joomla.com/quizeducacional/php/';

  constructor(public httpCtrl: HttpClient, private afa: AngularFireAuth) { }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }

  logout() {
    return this.afa.signOut();
  }

  adicionarUsuario(usuario: any){
    let url = this.caminho + "addUser.php";
    let headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.httpCtrl.post(url, usuario, {headers: headers}).toPromise();
  }

  getAuth() {
    return this.afa;
  }
}
