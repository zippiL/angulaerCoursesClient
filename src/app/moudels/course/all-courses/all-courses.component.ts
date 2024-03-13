import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { categoryService } from 'src/app/services/category.service';
import { courseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
  courses: Course[];
  filtercourses: Course[]=[];
  private searchSubject = new Subject<string>();
  searchCourse$: Observable<Course[]>;
  searchText: string = "";
  searchCourse(term: string): Observable<Course[]> {
    return new Observable((observer) => {
      if (term.trim() === "") {
        observer.next(this.courses);
      } else {
        const filteredStudents = this.courses.filter(cour =>
          cour.nameCourse.toLowerCase().includes(term.toLowerCase())
        );
        observer.next(filteredStudents);
      }
    });
  }
  onSearchInputChange(): void {
    this.searchSubject.next(this.searchText);
  }
  private setupSearchObservable(): void {
    this.searchCourse$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchCourse(term))
    );
  
    this.searchCourse$.subscribe((result: Course[]) => {
      this.filtercourses = result;
    });
  }

  constructor(private _coursesService: courseService,private _router:Router, private _categoryService: categoryService,){

  }
  

  ngOnInit(): void {
    this.setupSearchObservable();
    this._coursesService.getCourse().subscribe(res =>{
      this.courses = res;
      this.filtercourses=res;
      this.setupSearchObservable();
    }, (err)=>{
      console.log(err)
    })
  }
}
