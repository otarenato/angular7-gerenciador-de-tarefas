import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas'; 

export const routes: Routes = [
    ...TarefaRoutes,
    {
        path: '', //se o pathda url estiver vazia, 
        redirectTo: '/tarefas/listar', // redireciona para esta url.
        pathMatch: 'full' // aqui é para passar a url inteira para não haver erros
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}