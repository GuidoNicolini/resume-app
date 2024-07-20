import {Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';

export interface Section {
  name: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  folders: Section[] = [
    {
      name: 'Inicio',
    },
    {
      name: 'Experiencia',
    },
    {
      name: 'Educacion',
    },
    {
      name: 'Contacto'
    }
  ];
}
