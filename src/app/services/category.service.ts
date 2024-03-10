import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";

@Injectable()
export class categoryService{

    getCategory():Observable<Category[]>{
        return this._http.get<Category[]>("/api/categories/");
    }
    postCategory(category: Category): Observable<boolean> {
        return this._http.post<boolean>("/api/categories/",category);
      }
      putCategory(updateCategory: Category, id : Number): Observable<boolean> {
        return this._http.put<boolean>("/api/categories/" + id,updateCategory)
      }
      deleteCategory(id : Number): Observable<boolean> {
        return this._http.delete<boolean>("/api/categories/" + id)
      }
    constructor(private _http:HttpClient){

    } 
}