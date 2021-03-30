import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

/*
  Itens que ainda falta:
+ so habilitar o botão criar conta, quando todos os itens estiverem corretos
+ nome = minimo de seis caracteres
+ email = validar que é um email
+ Senha = minimo de 6 caracteres
+ Validar que as senhas digitadas no campo senha e confirma senha sejam identicas
*/
