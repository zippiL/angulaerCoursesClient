import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { Lecture } from 'src/app/models/lecture.model';
import { categoryService } from 'src/app/services/category.service';
import { lectureService } from 'src/app/services/lecture.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  
})
export class CourseDetailsComponent {
  @Input()
  courseToShow:Course;
  coursCategory:Category;
  courseLecturer:Lecture;
  editDetail(){
    this._router.navigate(['/editCourse/'+this.courseToShow._id])

  }
  constructor(private _categoryService:categoryService,private _router:Router,private _lecturersService:lectureService){

  }

  ngOnInit(){
    this._categoryService.getCategory().subscribe(res=>{
            this.coursCategory=res.find(x=>x._id==this.courseToShow.kodeKategory)})
         
            this._lecturersService.getLecturses().subscribe(res =>{
                  this.courseLecturer = res.find(x => x._id == this.courseToShow.kodeLecture)
                  console.log(this.courseLecturer)
                },(err) =>{
                  console.log(err);
                })
  }
}
