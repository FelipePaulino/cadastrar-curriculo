import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { from } from 'rxjs';
import { CadastradosComponent } from './cadastrados/cadastrados.component';
import { ResultadosCadastrosComponent } from './resultados-cadastros/resultados-cadastros.component';


const APP_ROUTES: Routes = [
    { path:'', component: CadastradosComponent},
    { path:'resultados-cadastros', component: ResultadosCadastrosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);