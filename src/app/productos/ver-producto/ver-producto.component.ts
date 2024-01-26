import { Component, OnInit } from '@angular/core';
import { nuevo } from '../../product';
import { ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-ver-producto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, MatButtonModule, MatIconModule, MatSidenavModule, MatExpansionModule, MatListModule],
  templateUrl: './ver-producto.component.html',
  styleUrl: './ver-producto.component.css'
})
export class VerProductoComponent implements OnInit {
  pov;
  constructor(route: ActivatedRoute, private productosService: ProductosService){
    const asd = route.params.subscribe(params => {this.pov = params.ID-1})
    console.log(this.pov);
  }
  //Con param.ID puedes sacar el numero de id, que será una herramienta que nos servirá más tarde 
  ngOnInit(): void {
    //alert("OH no, esta es una prueba");
  }

  productoPorID(codigo): []{
    return this.productoPorID(codigo);
  }
}
