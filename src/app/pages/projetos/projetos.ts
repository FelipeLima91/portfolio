import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, CardModule, AnimateOnScrollModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      image: 'image/finflow.png',
      title: 'FinFlow',
      description: 'Um gerenciador financeiro moderno, open-source e minimalista construído com Next.js, TailwindCSS e Supabase.',
      link: 'https://finflow-pink.vercel.app'
    },
    {
      image: 'image/plano-estudo-aws.png',
      title: 'Plano de Estudo AWS',
      description: 'Plano de estudos para ajudar na preparação para o exame AWS Certified Developer Associate e AWS AI Practitioner desenvolvido com React + Vite',
      link: 'https://felipelima91.github.io/plan-study-aws/'
    },
    // {
    //   image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
    //   title: 'Projeto 3',
    //   description: 'Descrição do projeto 3. Informações adicionais.',
    //   link: '#'
    // },
    // {
    //   image: 'https://primefaces.org/cdn/primeng/images/usercard.png',
    //   title: 'Projeto 3',
    //   description: 'Descrição do projeto 3. Informações adicionais.',
    //   link: '#'
    // }
  ];

  openLink(link: string) {
    if (link && link !== '#') {
      window.open(link, '_blank');
    } else {
       console.log('Card clicked');
    }
  }
}
