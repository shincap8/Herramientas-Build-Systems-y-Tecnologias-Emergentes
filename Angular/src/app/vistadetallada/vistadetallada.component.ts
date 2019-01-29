import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service'

@Component({
  selector: 'app-vistadetallada',
  templateUrl: './vistadetallada.component.html',
  styleUrls: ['./vistadetallada.component.css']
})
export class VistadetalladaComponent implements OnInit {
  
  nombre:string;
  imagen:string;
  precio:number;
  disponible:number;
  descripcion:string;

  constructor(private vista: InicioSesionService) {
    
    this.nombre = vista.nombre;
    this.imagen = vista.imagen;
    this.precio = vista.precio;
    this.disponible = vista.disponible;
    this.descripcion = vista.descripcion;

  }


  ngOnInit() {
  }

}