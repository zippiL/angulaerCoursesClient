import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lectureService } from 'src/app/services/lecture.service';
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
  isInstructor: boolean = false; // משתנה המציין האם התיבת ה- checkbox מסומנת או לא
  courseName!: string; // משתנה לאחסון שם הקורס
  error: boolean = false;
  constructor(private _userService: userService, private _router: Router, private _lecturerService: lectureService) { }
  hideCheckbox() {
    this.isInstructor = true;
  }
  checkUser(): void {
    this.error = false;

    if(this.isInstructor){
      this._lecturerService.loginLecturses(this.username, this.password).subscribe(
        response => {
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('password', this.password);
          this._router.navigate(["/allCourses"]);
        },
        (error: HttpErrorResponse) => {
          // Handle error
          if (error.status === 404) {
            alert('Lecturses not found.');
            this._router.navigate(["/register"]);
          } else if (error.status === 401) {
            console.log('Unauthorized: Incorrect username or password.');
          } else if (error.error && error.error.error === 'Lecturses exists') {
            console.log('Lecturses exists.');
          } else {
            console.error('An unexpected error occurred:', error.error);
          }
        });
    }

else{
  this._userService.loginUser(this.username, this.password).subscribe(
    response => {
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
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
      
}