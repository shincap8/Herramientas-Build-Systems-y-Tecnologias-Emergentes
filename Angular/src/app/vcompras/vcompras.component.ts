import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Carrocompras } from '../objetos/carrocompras'
import { CarritoCompra } from '../objetos/carrito-compra'


@Component({
  selector: 'app-vcompras',
  templateUrl: './vcompras.component.html',
  styleUrls: ['./vcompras.component.css']
})
export class VcomprasComponent implements OnInit {

  carrito: CarritoCompra[] = [];
  item: Carrocompras;
  total: number;

  constructor(private compra: InicioSesionService) {
    this.carrito = compra.comprasdb
    this.total = compra.total
  }

  actualizaritem() {
    for (let index = 0; index < this.carrito.length; index++) {
      const element = this.carrito[index];
      this.compra.actualizar(element.id, {
        disponible: element.disponible - element.cantidad,
      });
    }
    this.carrito = [];
    this.compra.comprasdb = [];
    this.total = 0;
  }

  cancelar() {
    this.carrito = [];
    this.compra.comprasdb = [];
    this.total = 0;
  }

  ngOnInit() {
  }
}