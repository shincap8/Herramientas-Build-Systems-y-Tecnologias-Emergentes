import { Component, OnInit, Input } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public islogin: boolean;
  public nomusuario: string;
  public emailusuario: string;
  public cantidad: number;
  @Input() cantidad2: number;
  @Input() mostrar: boolean;

  constructor(public authser: InicioSesionService) { }

  logout() {
    this.authser.logout();
  }

  ngOnInit() {
    this.authser.getAuth().subscribe(auth => {
      if (auth) {
        this.islogin = true;
        this.nomusuario = auth.displayName;
        this.emailusuario = auth.email;
        this.cantidad = this.authser.cantidad
      } else {
        this.islogin = false;
      }
    })
  }
}