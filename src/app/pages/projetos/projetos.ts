import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

/**
 * Interface que define a estrutura de um projeto
 * @property foto - URL da imagem do projeto
 * @property titulo - Nome/título do projeto
 * @property descricao - Descrição breve do projeto
 * @property link - URL para abrir o projeto (em nova aba)
 */
export interface Project {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class ProjetosComponent {
  /**
   * Array de projetos que serão exibidos no carrossel
   * Cada projeto contém: foto, título, descrição e link
   */
  projects: Project[] = [
    {
      foto: 'https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Projeto+1',
      titulo: 'Sistema de Gestão',
      descricao: 'Aplicação web para gerenciamento de tarefas e projetos com Angular e TypeScript.',
      link: 'https://github.com/seu-usuario/projeto-1'
    },
    {
      foto: 'https://via.placeholder.com/800x400/7C3AED/FFFFFF?text=Projeto+2',
      titulo: 'E-commerce Moderno',
      descricao: 'Plataforma de vendas online com carrinho de compras e integração de pagamento.',
      link: 'https://github.com/seu-usuario/projeto-2'
    },
    {
      foto: 'https://via.placeholder.com/800x400/2563EB/FFFFFF?text=Projeto+3',
      titulo: 'Dashboard Analytics',
      descricao: 'Dashboard interativo com gráficos e visualização de dados em tempo real.',
      link: 'https://github.com/seu-usuario/projeto-3'
    },
    {
      foto: 'https://via.placeholder.com/800x400/059669/FFFFFF?text=Projeto+4',
      titulo: 'API RESTful',
      descricao: 'API robusta com autenticação JWT e documentação Swagger completa.',
      link: 'https://github.com/seu-usuario/projeto-4'
    }
  ];

  /**
   * Configurações de responsividade do carrossel
   * Define quantos itens mostrar em cada tamanho de tela
   */
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  /**
   * Abre o link do projeto em uma nova aba
   * @param url - URL do projeto a ser aberta
   */
  openProject(url: string): void {
    window.open(url, '_blank');
  }
}
