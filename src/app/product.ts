export class product {
    id;
    nombre;
    descripcion;
    precio;
    descuento;
    peso;
    tipoPeso;
    categoria;
    constructor(nombre, id, descripcion, precio, descuento, peso, tipoPeso, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.descuento = descuento;
      this.peso = peso;
      this.tipoPeso = tipoPeso;
      this.categoria = categoria;
    }
    get precioDescuento(){
        if (this.descuento>0){
          return "$"+(this.precio*(100-this.descuento)/100) + " con un " + this.descuento +"% de descuento aplicado"
        } else {
          return "$"+this.precio
        }
      }
      get getNombre(){
        return this.nombre 
      }
      get getId(){
        return this.nombre 
      }
      get getPrecio(){
        return this.nombre 
      }
      get getDescripcion(){
        return this.descripcion
      }
  }

export function nuevo(nombre, id, descripcion, precio, descuento, peso, tipoPeso, categoria){
    this.nombre = nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
    this.descuento = descuento;
    this.peso = peso;
    this.tipoPeso = tipoPeso;
    this.categoria = categoria;
    if (this.descuento>0){
        this.precioReal = "$"+(this.precio*(100-this.descuento)/100);
        this.descuento =  " con un " + this.descuento +"% de descuento aplicado"
      } else {
        this.precioReal = "$"+this.precio;
        this.descuento = ""
      }
}