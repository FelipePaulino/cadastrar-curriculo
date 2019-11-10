import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CadastradosService } from '../cadastrados.service';
import { CadastradoModel } from './cadastrado.model';
import { Router } from '@angular/router';



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

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.scss']
})

export class CadastradosComponent implements OnInit {

  cadastrado: CadastradoModel = new CadastradoModel();
  cadastrados: Array<any> = new Array();
 

  constructor(private cadastradosService: CadastradosService, private route: Router) { }
  public cidades: Cidades[]
  public cargos: Cargos[]
  public editedCargo = true;
  public editedCidade= true;

  ngOnInit() {
    this.listarCadastrados();
  }

  cadastrar(){
  console.log(this.cadastrado);
    this.cadastradosService.cadastrarCandidato(this.cadastrado).subscribe(cadastrados =>{
    this.cadastrado = new CadastradoModel();
    this.listarCadastrados();
    this.route.navigate(['/resultados-cadastros']);
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
    this.editedCidade = true;
    console.log(valordigitado);
    this.cadastradosService.DropCidades(valordigitado).subscribe(retorno =>{
    this.cidades = retorno.map(item =>{
    return new Cidades(item.Descricao)}
    )}
  )}

  ListaCargos(valordigitado: string){
    this.editedCargo = true;
    console.log(valordigitado);
    this.cadastradosService.DropCargos(valordigitado).subscribe(retorno =>{
    this.cargos = retorno.map(item =>{
    return new Cidades(item.Descricao)}
    )}
  )}

  SelecaoCidade(NomeCidade){
    this.cadastrado.cidade = NomeCidade;
    this.editedCidade = false;
  }

  SelecaoCargo(NomeCargo){
    this.cadastrado.cargo = NomeCargo;
    this.editedCargo = false;
  }

  

}
