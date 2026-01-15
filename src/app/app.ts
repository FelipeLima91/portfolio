import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CurriculoComponent } from './pages/curriculo/curriculo';
import { ProjetosComponent } from './pages/projetos/projetos';
import { ArtigosComponent } from './pages/artigos/artigos';
import { ContatoComponent } from './pages/contato/contato';

@Component({
  selector: 'app-root',
  imports: [CurriculoComponent, ProjetosComponent, ArtigosComponent, ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  activeSection = signal<string>('curriculo');
  private observer?: IntersectionObserver;
  private updateTimeout?: number;

  ngAfterViewInit() {
    // Aguardar um tick para garantir que o DOM está pronto
    setTimeout(() => {
      this.setupScrollSpy();
      this.setupSmoothScroll();
    }, 100);
  }

  private setupSmoothScroll() {
    // Interceptar cliques nos links âncora para scroll suave
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        
        if (targetId) {
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

  private setupScrollSpy() {
    // Configurar IntersectionObserver para detectar seção visível
    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        // Limpar timeout anterior
        if (this.updateTimeout) {
          clearTimeout(this.updateTimeout);
        }

        // Aguardar 150ms após última mudança para atualizar (debounce)
        this.updateTimeout = window.setTimeout(() => {
          // Encontrar a seção com maior intersectionRatio
          const visibleEntries = entries.filter(e => e.intersectionRatio > 0.2);
          
          if (visibleEntries.length > 0) {
            // Ordenar por intersectionRatio e pegar a mais visível
            const mostVisible = visibleEntries.reduce((prev, current) => 
              current.intersectionRatio > prev.intersectionRatio ? current : prev
            );
            
            const id = (mostVisible.target as HTMLElement).id;
            
            // Só atualizar se mudou
            if (this.activeSection() !== id) {
              this.activeSection.set(id);
              console.log('Seção ativa:', id);
            }
          }
        }, 150);
      },
      {
        // Usar múltiplos thresholds
        threshold: [0, 0.2, 0.5, 0.8, 1.0],
        rootMargin: '0px'
      }
    );

    // Observar todas as seções
    const sections = document.querySelectorAll('.section');
    console.log('Seções encontradas:', sections.length);
    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy() {
    // Limpar observer e timeout ao destruir componente
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.observer?.disconnect();
  }
}
