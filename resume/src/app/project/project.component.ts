import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


interface nombre {
 id: number;
 nombre:string
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {


  nombres:nombre[] = [
    { id: 1,nombre: "guido" },
    { id: 2,nombre: "chau" }
  ];

}
