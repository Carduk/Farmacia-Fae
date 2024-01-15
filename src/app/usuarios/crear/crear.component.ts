import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [RouterLinkActive, RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent{

  constructor(private route: Router){}
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    generoId: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }


  guardarCambios(): void{
    //this.route.navigate(['verProducto/1'])
    console.log(this.form.value.name);
    console.log(this.form.value.generoId);
  }
}
