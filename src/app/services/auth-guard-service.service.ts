import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(): boolean {
        if (sessionStorage.getItem("username")=== null && sessionStorage.getItem("password") === null) {
            alert("You are not connected!")
            this._router.navigate(['/connection/login'])
            return false;
        }
        return true;
    }
}