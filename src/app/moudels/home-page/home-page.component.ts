import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  login(){
    this._router.navigate(['/login'])
  }
  register(){
    this._router.navigate(['/register'])
  }
  constructor(private _router:Router){

  }
}
