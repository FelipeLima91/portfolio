# Portfolio Profissional - Felipe Lima de Oliveira

Este projeto é o portfólio pessoal e profissional de Felipe Lima de Oliveira, desenvolvido como uma Single Page Application (SPA) moderna e responsiva. O objetivo é apresentar experiência profissional, projetos e artigos de forma clara, acessível e esteticamente minimalista.

🔗 **Link do Projeto:** [https://felipelima91.github.io/portfolio/](https://felipelima91.github.io/portfolio/)

## 🎯 Finalidade

Servir como cartão de visitas digital para recrutadores e colegas da área de tecnologia, demonstrando habilidades técnicas em desenvolvimento web (Angular, TypeScript, SCSS) e conhecimento em práticas de engenharia de software e serviços AWS.

## 🚀 Funcionalidades

- **Navegação SPA**: Navegação fluida sem recarregamento de página.
- **Header Fixo**: Menu de navegação sempre acessível no topo da tela.
- **Scroll Suave**: Rolagem suave ao clicar nos links de navegação ("smooth scroll").
- **Scroll Spy**: O menu destaca automaticamente a seção que está visível na tela durante a rolagem.
- **Design Responsivo**: Layout adaptável para desktops, tablets e dispositivos móveis.
- **Download de CV**: Integração direta para visualização/download do currículo completo.
- **Links Sociais**: Acesso rápido ao LinkedIn, GitHub e WhatsApp.

## 🧩 Componentes Principais

O projeto é estruturado em componentes Angular modulares:

### 1. `Header` (Navegação)

Barra superior fixa contendo o nome do profissional e links para as seções (Curriculo, Projetos, Artigos, Contato). Responsável pela navegação rápida.

### 2. `Resumo` (Home/Intro)

Seção de "Boas-vindas" com tipografia hierárquica (Nome em destaque laranja) e breve apresentação profissional.

### 3. `Curriculo`

Apresenta um resumo da atuação atual (Itaú Unibanco), tecnologias utilizadas (AWS, Observabilidade) e formação acadêmica. Inclui o botão de ação para o CV completo.

### 4. `Projetos`

Seção dedicada à exibição dos principais projetos desenvolvidos, com descrições e links.

### 5. `Artigos`

Espaço para compartilhar conhecimento e publicações técnicas.

### 6. `Contato` (Rodapé)

Seção final com layout "clean", contendo links diretos para contato profissional e redes sociais, padronizados com o design visual do site.

## 🛠️ Tecnologias Utilizadas

- **Angular 19+**: Framework principal.
- **TypeScript**: Lógica e tipagem segura.
- **SCSS (Sass)**: Estilização modular e mixins.
- **HTML5**: Estrutura semântica.
- **GitHub Pages**: Hospedagem e deploy contínuo (CD).
- **GitHub Actions**: Pipeline de automação para build e deploy.

## 📦 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/FelipeLima91/portfolio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. Acesse `http://localhost:4200/`.

---

_Desenvolvido por Felipe Lima de Oliveira._
