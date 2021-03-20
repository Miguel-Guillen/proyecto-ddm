import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase = "http://localhost:3000/api/producto/"
  producto: any

  constructor(private http: HttpClient) {
    this.producto = []
   }

  getProductos(){
    this.http.get(this.urlBase).subscribe(
      res=> {
        console.log("productos obtenidos", res)
        this.producto = res;
      },
      err =>{
        console.log(err)        
      }
    )
  }

  registrar(prod) {
    return this.http.post(`${this.urlBase}`, prod).toPromise();
  }

}
