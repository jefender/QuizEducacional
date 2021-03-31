import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User) {

  }

  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {

  }

  getAuth() {

  }
}
