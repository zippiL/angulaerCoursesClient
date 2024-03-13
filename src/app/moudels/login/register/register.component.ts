import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  addUser: FormGroup = new FormGroup({
    "name": new FormControl("", Validators.required),
    "adress": new FormControl("", Validators.required),
    "mail": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })
  
  userToAdd: User;
  saveUser(){
    this.userToAdd = new User(this.addUser["name"], this.addUser["address"], this.addUser["email"], this.addUser["password"]);
    this._userService.addUser(this.userToAdd).subscribe(res =>{
      console.log("register successfully!");
      sessionStorage.setItem('username', this.addUser["name"]);
      sessionStorage.setItem('password', this.addUser["password"]);
      this._rout.navigate(["/allCourses"]);
    }, err=>{
      console.log(err);
    })
  }
  constructor(private _userService:userService,private _rout:Router){

  }
  ngOnInit(){
  }
}
