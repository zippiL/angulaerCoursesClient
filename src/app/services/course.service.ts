import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";

@Injectable()
export class courseService {

    getCourse(): Observable<Course[]> {
        return this._http.get<Course[]>("/api/courses/");
    }
    getCourseById(courseId: string): Observable<Course> {
        return this._http.get<Course>(`/api/courses/${courseId}`);
      }
    postCourse(course: Course): Observable<boolean> {
        return this._http.post<boolean>("/api/courses/", course);
    }
    putCourse(updateCourse: Course, id: String): Observable<boolean> {
        return this._http.put<boolean>("/api/courses/" + id, updateCourse)
    }
    deleteCourse(id: Number): Observable<boolean> {
        return this._http.delete<boolean>("/api/courses/" + id)
    }
    constructor(private _http: HttpClient) {

    }
}