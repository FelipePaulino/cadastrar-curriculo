import { Component, OnInit } from '@angular/core';
import { CadastradosService } from '../cadastrados.service';

export class Cidades {
  Descricao: string;

  constructor(Descricao: string){
      this.Descricao = Descricao;
  }
}

export class Cargos {
  Descricao: string;

  constructor(Descricao: string){
      this.Descricao = Descricao;
  }
}
export class CadastradoModel{
  nome: string;
  email: string;
  celular: string;
  cargo: string;
  cidade: string;
}





@Component({
  selector: 'app-resultados-cadastros',
  templateUrl: './resultados-cadastros.component.html',
  styleUrls: ['./resultados-cadastros.component.scss']
})


  export class ResultadosCadastrosComponent implements OnInit {

    cadastrado: CadastradoModel = new CadastradoModel();
    cadastrados: Array<any> = new Array();
    CidadeClicada: string = '';
    CargoClicado: string = '';
  
    constructor(private cadastradosService: CadastradosService) { }
    public cidades: Cidades[]
    public cargos: Cargos[]
  
    ngOnInit() {
      this.listarCadastrados();
    }
  
    cadastrar(){
    console.log(this.cadastrado);
      this.cadastradosService.cadastrarCandidato(this.cadastrado).subscribe(cadastrados =>{
      this.cadastrado = new CadastradoModel();
      this.listarCadastrados();
    }, err => {console.log("erro", err)}
    )}
  
    listarCadastrados(){
      this.cadastradosService.listarCadastrados().subscribe(cadastrados => {
      this.cadastrados = cadastrados;
      }, err =>{
        console.log("erro", err);
      })
    }
  
    ListaCidades(valordigitado: string){
      console.log(valordigitado);
      this.cadastradosService.DropCidades(valordigitado).subscribe(retorno =>{
      this.cidades = retorno.map(item =>{
      return new Cidades(item.Descricao)}
      )}
    )}
  
    ListaCargos(valordigitado: string){
      console.log(valordigitado);
      this.cadastradosService.DropCargos(valordigitado).subscribe(retorno =>{
      this.cargos = retorno.map(item =>{
      return new Cidades(item.Descricao)}
      )}
    )}
  
    SelecaoCidade(evento){
      this.CidadeClicada = (<HTMLInputElement>evento.target).textContent;
      
      
    }
  
    SelecaoCargo(evento){
      this.CargoClicado = (<HTMLInputElement>evento.target).textContent;
    }
  
    
  
  

}
