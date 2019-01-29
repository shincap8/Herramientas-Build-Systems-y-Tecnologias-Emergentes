import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  miFormulario: FormGroup;
  public email: string;
  public password: string;
  mostrar = false;


  constructor(public outService: InicioSesionService, public router: Router) {

  }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'nombre-email': new FormControl('sin titulo', Validators.required),
      'password-email': new FormControl('', Validators.required),
    })
  }

  login() {
    this.outService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/home']);
        console.log(res);
      }).catch((err) => {
        console.log(err);
        this.mostrar = true;
      })
  }
}