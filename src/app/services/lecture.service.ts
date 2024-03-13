import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Lecture } from "../models/lecture.model";

@Injectable()
export class lectureService{

    getLecturses():Observable<Lecture[]>{
        return this._http.get<Lecture[]>("/api/lecturers/");
    }
    getLectursesBypasname(name:string,password:string):Observable<any>{
      return this._http.post<any>("/api/lecturers/check",{name,password});
  }

    postLecturses(lecture: Lecture): Observable<boolean> {
        return this._http.post<boolean>("/api/lecturers/",lecture);
      }
      putLecturses(updateLecture: Lecture, id : Number): Observable<boolean> {
        return this._http.put<boolean>("/api/lecturers/" + id,updateLecture)
      }
      deleteLecturses(id : Number): Observable<boolean> {
        return this._http.delete<boolean>("/api/lecturers/" + id)
      }
      loginLecturses(name: string, password: string): Observable<boolean> {
        return this._http.post<boolean>("/api/lecturers/login", { name, password });
    }
    constructor(private _http:HttpClient){

    } 
}