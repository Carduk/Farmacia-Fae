import { Component } from '@angular/core';
import { nuevo } from '../product';
import { productosEnCanasta } from '../productos/canasta/canasta';
import { CatalogoComponent } from '../productos/catalogo/catalogo.component';
import { CanastaComponent } from '../productos/canasta/canasta.component';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CatalogoComponent, CanastaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  constructor(private productosService: ProductosService){
  }
  title = 'Fae pharma'; 
  canasta;
  producto;
  medicamento = this.productosService.filtrarProducto(1);
  bebidas = this.productosService.filtrarProducto(2);
  temp = productosEnCanasta;
}
