import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angolurClient';
  name:string;
  constructor(private _root:Router){}
  logout(){
    alert("log out successfully!")
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this._root.navigate(['/home'])
  }
  connect() {
    return (sessionStorage.getItem('username') != null || sessionStorage.getItem('password') != null);
  }
  ngOnInit(): void {
    this.name = sessionStorage.getItem("username");
  }
}
