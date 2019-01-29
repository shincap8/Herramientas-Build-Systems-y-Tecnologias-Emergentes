import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Carrocompras } from '../objetos/carrocompras';




@Component({
  selector: 'app-vprincipal',
  templateUrl: './vprincipal.component.html',
  styleUrls: ['./vprincipal.component.css']
})
export class VprincipalComponent implements OnInit {

  public catalogo: any[];
  public orden: string = 'nombre';
  public imagen: string;
  nomfruta: string;
  dirfoto: string;
  precio: number;
  unidades: number;
  public cantidad: number;
  public mostrar: boolean;
  public cantidad2 = 0;
  public total: number = 0;
  compra: {
    id: number,
    nombre: string,
    imagen: string,
    precio: number,
    disponible: number,
    subtotal: number,
    cantidad: number
  };



  constructor(private liscatalogo: InicioSesionService) { }

  ngOnInit() {
    this.liscatalogo.getcatalogo()
      .snapshotChanges()
      .subscribe(item => {
        this.catalogo = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.catalogo.push(x);
        })
      })
  }

  ver(nomfruta, dirfoto, precio, unidades, descripcion) {
    this.liscatalogo.itemactual(nomfruta, dirfoto, precio, unidades, descripcion);
  }

  addCompra(id, nomfruta, dirfoto, precio, unidadOrig, cantidad) {
    this.compra = {
      id: id,
      nombre: nomfruta,
      imagen: dirfoto,
      precio: precio,
      disponible: unidadOrig,
      subtotal: cantidad*precio,
      cantidad: cantidad
    };
    for (let item of this.catalogo) {
      if (item.id == id) {
        item.disponible = unidadOrig - cantidad;
        this.total = this.total + (cantidad*precio);
      }
    }
    this.liscatalogo.anadirCompra(this.compra, this.total)
    this.cantidad2 = this.cantidad2 + parseInt(cantidad);
    this.mostrar = true;
    
  }
}