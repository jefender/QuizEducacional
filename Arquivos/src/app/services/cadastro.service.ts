import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  perguntasCollection: 'perguntas';

  constructor(public db: AngularFireDatabase, public http: HttpClient) { }

  CreateRecord(record){
    this.db.database.ref('/portugues').push(record);
  }

  pegarDadosfirebase() {
    let url = 'https://quizapp-c92a5-default-rtdb.firebaseio.com/portugues/-MYLum2fUQEMwo6ByYk9.json';
    let header  = new HttpHeaders ({'content-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }
}
