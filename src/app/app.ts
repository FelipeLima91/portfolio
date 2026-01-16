import { Component, AfterViewInit, signal } from '@angular/core';
import { CurriculoComponent } from './pages/curriculo/curriculo';
import { ProjetosComponent } from './pages/projetos/projetos';
import { ArtigosComponent } from './pages/artigos/artigos';
import { ContatoComponent } from './pages/contato/contato';
import { ResumoComponent } from './pages/resumo/resumo';

@Component({
  selector: 'app-root',
  imports: [CurriculoComponent, ProjetosComponent, ArtigosComponent, ContatoComponent, ResumoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  activeSection = signal<string>('curriculo');

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupSmoothScroll();
    }, 100);
  }

  private setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    console.log('Setup: Links encontrados:', links.length);
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        console.log('Clicou em:', targetId);
        
        if (targetId) {
          // Atualizar seção ativa ao clicar
          this.activeSection.set(targetId);
          console.log('activeSection atualizado para:', this.activeSection());
          
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
}
