import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-resumo',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './resumo.html',
  styleUrl: './resumo.scss',
})
export class ResumoComponent {}
