import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";

@Injectable()
export class courseService {
    courses: Course[];

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
    checkCourse(cname: string,id:string) {
        this.getCourse().subscribe(data => {
          this.courses = data;
        })
        const course = this.courses.find(c => c.nameCourse===cname&&c._id === id);
        return course;
      }
    
    constructor(private _http: HttpClient) {

    }
}