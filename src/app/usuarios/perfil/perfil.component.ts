import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  pov;
  constructor(route: ActivatedRoute){
    const asd = route.params.subscribe(params => {this.pov = params.ID})
    console.log(this.pov);
  }

  adminCheck(): boolean{
    if(this.pov.privilegios==1){
      return true;
    } else {
      return false;
    }
  }
}
