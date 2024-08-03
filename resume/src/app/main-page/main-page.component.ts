import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,ProjectComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
