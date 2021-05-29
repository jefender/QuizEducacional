import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
// export class LoginGuard implements CanActivate {
export class LoginGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // canActivate(): Promise<boolean> {
  //   return new Promise(resolve => {
  //     this.authService.getAuth().onAuthStateChanged(user => {
  //       if (user) this.router.navigate(['folder/Inbox']);

  //       resolve(!user ? true : false);
  //     })
  //   });
  // }
}
