import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-vistadetallada',
  templateUrl: './vistadetallada.component.html',
  styleUrls: ['./vistadetallada.component.css']
})
export class VistadetalladaComponent implements OnInit {

  nomfruta: string;
  dirfoto: string;
  precio: number;
  unidades: number;
  descripcion: string;

  constructor(private vista: InicioSesionService) {

    this.nomfruta = vista.nombre;
    this.dirfoto = vista.imagen;
    this.precio = vista.precio;
    this.unidades = vista.disponible;
    this.descripcion = vista.descripcion;

  }


  ngOnInit() {
  }

}