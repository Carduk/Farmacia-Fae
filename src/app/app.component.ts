import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogoComponent } from './productos/catalogo/catalogo.component';
import { CanastaComponent } from './productos/canasta/canasta.component';
import {product, nuevo} from './product';
import { productosEnCanasta } from './productos/canasta/canasta';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CatalogoComponent, CanastaComponent, MaterialModule, MenuComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

}
