import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public userService: UsuarioService, private productService: ProductoService) {}
  
  ngOnInit() {
    this.obtenerProductos();
    this.obtenerUsuarios
  }

  obtenerProductos(){
    this.productService.getProductos()
  }

  obtenerUsuarios(){
    this.userService.getUsuarios()
  }

}
