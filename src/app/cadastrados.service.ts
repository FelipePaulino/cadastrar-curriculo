import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastradoModel } from './cadastrados/cadastrado.model';



@Injectable({
  providedIn: 'root'
})
export class CadastradosService {

  constructor(private http: HttpClient) { }

  cadastrarCandidato(cadastrado: CadastradoModel): Observable<any>{
    return this.http.post("http://localhost:3000/cadastros", cadastrado);
  }
  listarCadastrados(): Observable<any>{
    return this.http.get("http://localhost:3000/cadastros");
  }
  DropCidades(value: string) : Observable<any>{
    return this.http.get("https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=CE&term=" + value);
  }
  DropCargos(value: string) : Observable<any>{
    return this.http.get("https://www.empregos.com.br/user-controls/hdlSugest2.ashx?t=C&term=" + value);
  }
}
