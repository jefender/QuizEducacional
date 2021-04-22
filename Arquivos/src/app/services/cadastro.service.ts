import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  perguntasCollection: 'perguntas';
  random; url1; url2; url3; url4;

  constructor(public db: AngularFireDatabase, public http: HttpClient) { }

  CreateRecord(record){
    this.db.database.ref('/matematica').push(record);
  }

  pegarDadosfirebase() {
    this.random = Math.floor(Math.random() * 4 + 1);
    if(this.random == 1){
      this.url1 = 'https://quizapp-c92a5-default-rtdb.firebaseio.com/portugues/-MYkew7DxuhrJH-RAyQS.json';
    };
    if(this.random == 2){
      this.url1 = 'https://quizapp-c92a5-default-rtdb.firebaseio.com/portugues/-MYkflUb8aQZyDr3elaV.json';
    };
    if(this.random == 3){
      this.url1 = 'https://quizapp-c92a5-default-rtdb.firebaseio.com/matematica/-MYkh1C8RULgPUVz9IFF.json';
    };
    if(this.random == 4){
      this.url1 = 'https://quizapp-c92a5-default-rtdb.firebaseio.com/matematica/-MYkhWfcD4LGueJzEEfy.json';
    };

    let url = this.url1;
    let header  = new HttpHeaders ({'content-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }
}
