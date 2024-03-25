import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FontAwesomeModule,
  RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  faPaperPlane = faPaperPlane;
  faGripHorizontal = faGripHorizontal;
  faDownload = faDownload;
 

}
