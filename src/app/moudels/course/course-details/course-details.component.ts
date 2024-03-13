import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { Lecture } from 'src/app/models/lecture.model';
import { categoryService } from 'src/app/services/category.service';
import { lectureService } from 'src/app/services/lecture.service';
import { SyllabusDialogComponent } from '../syllabus-dialog/syllabus-dialog.component';

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
  constructor(private _categoryService:categoryService,private _router:Router,private _lecturersService:lectureService,public dialog: MatDialog){

  }
  myCourse() {
    if (sessionStorage.getItem("username") == this.courseLecturer?.name &&
      sessionStorage.getItem("password") == this.courseLecturer?.password)
      
      return true;
    return false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(SyllabusDialogComponent, {
      data: { syllabus: this.courseToShow.syllabusArr }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(){
    this._categoryService.getCategory().pipe().subscribe(res=>{
            this.coursCategory=res.find(x=>x._id==this.courseToShow.kodeKategory)})
         
            this._lecturersService.getLecturses().subscribe(res =>{
                  this.courseLecturer = res.find(x => x._id == this.courseToShow.kodeLecture)
                  console.log(this.courseLecturer)
                },(err) =>{
                  console.log(err);
                })
  }
}

