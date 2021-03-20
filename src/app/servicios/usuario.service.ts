import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  userName: string;
  correo: string;
  tipoUser: string;

  objetos:Array<any>

  urlBase = "http://localhost:3000/api/usuario/"
  usuario: any

  constructor(private http: HttpClient) {
    this.objetos=[
      {nombre:'Mesa',color: 'Cafe'},
      {nombre:'Estufa',color: 'Gris'},
      {nombre:'Libreta',color: 'Rosa'},
      {nombre:'Silla',color: 'Azul'}
    ]

    this.usuario = []
  }
  
  popObjetos(){
    this.objetos.pop()
  }

  getUsuarios(){
    this.http.get(this.urlBase).subscribe(
      res=> {
        console.log("usuarios obtenidos", res)
        this.usuario = res;
      },
      err =>{
        console.log(err)        
      }
    )
  }

  registrar(user) {
    return this.http.post(`${this.urlBase}`, user).toPromise();
  }
}
