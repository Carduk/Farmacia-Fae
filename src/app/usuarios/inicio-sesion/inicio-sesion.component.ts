import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

  selectedUser;
  constructor(){}
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  userCheck(): void{
    
  }

  passwordCheck(): boolean{
    if ( this.form.value.contraseña = this.selectedUser.password){
      return true;
    } else{
      alert("CONTRASEÑA INCORRECTA");
      return false;
    }
  }
}
