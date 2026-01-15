import { Routes } from '@angular/router';
import { CurriculoComponent } from './pages/curriculo/curriculo';
import { ProjetosComponent } from './pages/projetos/projetos';
import { ArtigosComponent } from './pages/artigos/artigos';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'curriculo', pathMatch: 'full' },
  { path: 'curriculo', component: CurriculoComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'artigos', component: ArtigosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: 'curriculo' },
];
