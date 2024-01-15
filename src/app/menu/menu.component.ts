import { Component } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { RouterLink, RouterLinkActive, RouterOutlet, Router  } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

//https://fonts.google.com/icons

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule, FormsModule, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
busqueda: any;

constructor(private route: Router){}

ir(){
  this.route.navigate(['buscar/'+this.busqueda]);
  console.log(this.busqueda);
}

}
