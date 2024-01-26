import { Injectable } from '@angular/core';
import { nuevo } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  a;
  b;
  x;
  p1 = new nuevo('Osteoartrit', 1, 'Medicamento para artitis, artrosis y osteoporosis', 30000, 60, 2, 'Kg', 1);
  p2 = new nuevo('Paracetamol', 2, 'Medicamento convencional para dolores de cabeza', 4000, 0, 250, 'mg', 1);
  p3 = new nuevo('Coca-Cola light', 3, 'Refrescante bebida sin azucar y con sabor liviano', 1200, 10, 591, 'ml', 2);
  p4 = new nuevo('Monster Energy', 4, 'Bebida energética favorita de la gente', 2000, 0, 990, 'ml', 2);
  p5 = new nuevo('Clorfenamina maleato', 5,'Medicamento anti-inflamatorio', 5000, 5, 100, 'mg', 1);
  p6 = new nuevo('Salbutamol', 6,'Medicamento para combatir la bronquitis', 7500, 0, 150, 'cm³', 1);
  p7 = new nuevo('Pepto bismol', 7,'Base para combatir la acidez estomacal', 12000, 15, 200, 'ml', 1);
  constructor(private http: HttpClient) { }

  public filtrarProducto(codigo): []{
    this.x = 0;
    this.a = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7 ];
    this.b = [];
    while(true){
      if(this.a[this.x].categoria == codigo){ 
        this.b.push(this.a[this.x]);
      }
      this.x = this.x+1
      if(this.a[this.x]== null){
        break;
      }
    }
    return this.b;
  }

  public getProducto(codigo): Observable<[]>{
    this.a = this.http.get<[]>('https://localhost:7002/api/producto');
    this.x = 0;
    this.b = [];
    while(true){
      if(this.a[this.x].categoria == codigo){ 
        this.b.push(this.a[this.x]);
      }
      this.x = this.x+1
      if(this.a[this.x]== null){
        break;
      }
    }
    return this.b;
  }
}
