import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'name': [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
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

  ngOnInit() {
  }

  submitForm(){
    console.log(this.fGroup.value);
  }
}

/*
  Itens que ainda falta:
+ Validar que as senhas digitadas no campo senha e confirma senha sejam identicas
*/
