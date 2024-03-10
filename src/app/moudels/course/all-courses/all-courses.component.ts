import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { courseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
  courses: Course[];

  constructor(private _coursesService: courseService){

  }

  ngOnInit(): void {
    this._coursesService.getCourse().subscribe(res =>{
      this.courses = res;
    }, (err)=>{
      console.log(err)
    })
  }
}
