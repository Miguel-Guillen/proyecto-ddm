import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  prod = {
    nombre: null,
    categoria: null,
    descripcion: null,
    precio: null
  }

  nombre: String;
  categoria: String;
  descripcion: String;
  precio: Number;

  constructor(public userService: UsuarioService, private productService: ProductoService) {}

  registro(){
    this.prod.nombre = this.nombre;
    this.prod.categoria = this.categoria;
    this.prod.descripcion = this.descripcion;
    this.prod.precio = this.precio;
    this.productService.registrar(this.prod).then((resp: any) =>{
      console.log(resp);
    }).catch(error => {
      console.log(error);
    })
    console.log(this.prod)
  }
}
