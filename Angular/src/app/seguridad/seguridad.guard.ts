import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/take'
import { AngularFireAuth } from '@angular/fire/auth';
import { InicioSesionService } from '../servicios/inicio-sesion.service';


@Injectable({
    providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
    constructor(
        private router: Router,
        private afauth: AngularFireAuth,
        private afservice: InicioSesionService
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.afservice.afAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['']);
                }
            });
    }
}