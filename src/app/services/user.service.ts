import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class userService {

    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>("/api/users/")
    }

   
    addUser(user: User): Observable<any> {
        return this._http.post<any>("/api/users/", user);
    }
    deleteUse(id: number): Observable<boolean> {
        return this._http.delete<boolean>("/api/users/" + id)
    }

    updateUser(updateUser: User, id: Number): Observable<boolean> {
        return this._http.put<boolean>("/api/users/" + id, updateUser);
    }

    loginUser(name: string, password: string): Observable<boolean> {
        return this._http.post<boolean>("/api/users/login", { name, password });
    }

    
    constructor(private _http: HttpClient) {

    }
}