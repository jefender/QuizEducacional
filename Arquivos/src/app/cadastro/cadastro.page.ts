import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadastro } from '../interfaces/cadastro';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  perguntasData: Cadastro;
  fGroup: FormGroup;

  constructor(
    private cadastroService: CadastroService,
    public fb: FormBuilder
  ) {
    this.perguntasData = {} as Cadastro;
   }

  ngOnInit() {
    this.fGroup = this.fb.group({
      pergunta: ['', [Validators.required]],
      resposta1: ['', [Validators.required]],
      resposta2: ['', [Validators.required]],
      resposta3: ['', [Validators.required]],
      resposta4: ['', [Validators.required]],
      correta: ['', [Validators.required]],
      id: ['', [Validators.required]]
    })
  }

  CreateRecord(){
    this.cadastroService.CreateRecord(this.fGroup.value);
  }
}
