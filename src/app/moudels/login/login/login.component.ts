import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  username: string;
  password: string;

  error: boolean = false;
  constructor(private _userService: userService, private _router: Router) { }

  checkUser(): void {
    this.error = false;

    this._userService.loginUser(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        this._router.navigate(["/allCourses"]);
      },
      (error: HttpErrorResponse) => {
        // Handle error
        if (error.status === 404) {
          console.log('User not found.');
          this._router.navigate(["/register"]);
        } else if (error.status === 401) {
          console.log('Unauthorized: Incorrect username or password.');
        } else if (error.error && error.error.error === 'User exists') {
          console.log('User exists.');
        } else {
          console.error('An unexpected error occurred:', error.error);
        }
      });
  }
}