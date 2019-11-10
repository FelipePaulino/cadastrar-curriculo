import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CadastradosComponent } from './cadastrados/cadastrados.component';


import { ResultadosCadastrosComponent } from './resultados-cadastros/resultados-cadastros.component';
import { routing } from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    CadastradosComponent,
    ResultadosCadastrosComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
