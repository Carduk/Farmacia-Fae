import { Component, OnInit } from '@angular/core';
import { nuevo } from '../../product';
import { ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ver-producto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './ver-producto.component.html',
  styleUrl: './ver-producto.component.css'
})
export class VerProductoComponent implements OnInit {
  pov;
  constructor(route: ActivatedRoute){
    const asd = route.params.subscribe(params => {this.pov = params.ID-1})
    console.log(this.pov);
  }
  //Con param.ID puedes sacar el numero de id, que será una herramienta que nos servirá más tarde 
  ngOnInit(): void {
    alert("OH no, esta es una prueba")
  }

  p1 = new nuevo('Osteoartrit', 1, 'Medicamento para artitis, artrosis y osteoporosis', 30000, 60, 2, 'Kg', 1);
  p2 = new nuevo('Paracetamol', 2, 'Medicamento convencional para dolores de cabeza', 4000, 0, 250, 'mg', 1);
  p3 = new nuevo('Coca-Cola light', 3, 'Refrescante bebida sin azucar y con sabor liviano', 1200, 10, 591, 'ml', 2);
  p4 = new nuevo('Monster Energy', 4, 'Bebida energética favorita de la gente', 2000, 0, 990, 'ml', 2);
  p5 = new nuevo('Clorfenamina maleato', 5,'Medicamento anti-inflamatorio', 5000, 5, 100, 'mg', 1);
  p6 = new nuevo('Salbutamol', 6,'Medicamento para combatir la bronquitis', 7500, 0, 150, 'cm³', 1);
  p7 = new nuevo('Pepto bismol', 7,'Base para combatir la acidez estomacal', 12000, 15, 200, 'ml', 1);
  a = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7 ];

}
