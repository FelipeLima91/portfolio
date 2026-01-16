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
      this.setupScrollSpy();
    }, 100);
  }

  private setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.activeSection.set(id);
          }
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px' // Trigger when section is in middle of viewport
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  private setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        
        if (targetId) {
          this.activeSection.set(targetId);
          
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
