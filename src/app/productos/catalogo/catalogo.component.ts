import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { nuevo } from '../../product';
import { productosEnCanasta } from '../canasta/canasta';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MaterialModule, RouterLinkActive, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
  pov;
  constructor(private route: Router){ }

  fe = 'verProducto/1';
  @Input()
  producto;
  ngOnInit(): void {
  }
  addi(nombre, id, descripcion, precio, descuento, peso, tipoPeso, categoria): void{
    const tempo = new nuevo(nombre, id, descripcion, precio, descuento, peso, tipoPeso, categoria); //Encontrar la forma de actualizar la variable productosEnCanasta
    console.log(nombre + " " + id);
  }
  conseguirURL(index): String{
    return 'verProducto/' + index
  }

  navegar(index): void{
    this.route.navigate([this.conseguirURL(index)]);
  }

  btnClick(): void{
  }

}
