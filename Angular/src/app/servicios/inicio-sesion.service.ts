import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import 'rxjs/add/operator/map';
import { Carrocompras } from '../objetos/carrocompras';
import { CarritoCompra } from '../objetos/carrito-compra';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  items: AngularFireList<any[]>;
  nombre: string;
  imagen: string;
  precio: number;
  disponible: number;
  cantidad: number;
  total: number;
  descripcion: string;
  comprasdb: CarritoCompra[] = [];

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) { }

  getcatalogo() {
    return this.items = this.af.list('/productos');
  }

  actualizar($key, compra) {
    this.items.update($key, compra);
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  itemactual(nomfruta, dirfoto, precio, unidades, descripcion) {
    this.nombre = nomfruta;
    this.imagen = dirfoto;
    this.precio = precio;
    this.disponible = unidades;
    this.descripcion = descripcion;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  anadirCompra(compra, total) {
    this.comprasdb.push(compra);
    this.total = total;
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    })
  }
}