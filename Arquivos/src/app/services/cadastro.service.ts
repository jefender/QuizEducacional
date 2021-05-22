import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  caminho: string = 'https://jefersonferreira.joomla.com/quizeducacional/php/';

  constructor(public http: HttpClient) { }

  pegarPerguntasBanco(){
    let url = this.caminho + "lerPerguntas.php";
    let headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }
}
