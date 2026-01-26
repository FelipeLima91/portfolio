import { Component, AfterViewInit, OnInit, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
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
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class App implements AfterViewInit, OnInit {
  activeSection = signal<string>('curriculo');
  menuOpen = signal<boolean>(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    this.closeMenu();
    this.activeSection.set('resumo');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    
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
      rootMargin: '-50% 0px -50% 0px'
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
