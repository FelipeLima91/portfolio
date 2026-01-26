import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-artigos',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './artigos.html',
  styleUrl: './artigos.scss',
})
export class ArtigosComponent {

}
