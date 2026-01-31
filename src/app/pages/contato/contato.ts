import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class ContatoComponent {}
