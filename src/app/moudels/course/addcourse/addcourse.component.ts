import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Course, WayLearning } from 'src/app/models/course.model';
import { Lecture } from 'src/app/models/lecture.model';
import { categoryService } from 'src/app/services/category.service';
import { courseService } from 'src/app/services/course.service';
import { lectureService } from 'src/app/services/lecture.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})


export class AddcourseComponent {
  notBeforeTodayValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate: Date = control.value;
      const today: Date = new Date();
      today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

      if (selectedDate < today) {
        return { 'notBeforeToday': true }; // Return error if selected date is before today
      }
      return null; // Return null if validation passes
    }
  }
  addCourse: FormGroup = new FormGroup({

    "nameCourse": new FormControl("", [Validators.required]),
    "kodeKategory": new FormControl("", [Validators.required]),
    "amountLessons": new FormControl("", [Validators.required, Validators.minLength(0)]),
    "startCourseDate": new FormControl("", [Validators.required, this.notBeforeTodayValidator]),
    "syllabusArr": this.fb.array([]),
    "wayLearning": new FormControl("", [Validators.required]),
    "image": new FormControl("", [Validators.required]),
  })
  categories: Category[];
  courseToSave: Course;
  lect: Lecture;
  saveCourse() {
     if (this.addCourse.invalid) {
    return; // אם הטופס אינו תקין, תעצור את הפונקציה כאן
  }
    this.categories.forEach(cat => {
      if (cat.name == this.addCourse.value["kodeKategory"])
        this.addCourse.value["kodeKategory"] = cat._id;

    })
    this.courseToSave = new Course(
      this.addCourse.value["nameCourse"],
      this.addCourse.value["kodeKategory"],
      this.addCourse.value["amountLessons"],
      this.addCourse.value["startCourseDate"],
      this.addCourse.value["syllabusArr"],
      
      this.convertStringToWayLearning(this.addCourse.value["wayLearning"]),
      this.lect._id,
      this.addCourse.value["image"]
    )

    this._courseService.postCourse(this.courseToSave).subscribe();
    // console.log(JSON.stringify(courseToSave));
    alert("success!!!");
    this._router.navigate(["/allCourses"]);
  }
  constructor(private _courseService: courseService, private _categoryService: categoryService, private _router: Router, private _lecture: lectureService,private fb:FormBuilder) { }

  ngOnInit(): void {
 
    this._categoryService.getCategory().subscribe(res => {
      this.categories = res;
    }, (err) => {
      console.log(err)
    })
    this._lecture.getLectursesBypasname(sessionStorage.getItem('username'), sessionStorage.getItem('password')).subscribe(
      res => {
        this.lect = res;
      }
    )
  }

  convertStringToWayLearning(value: string): number | undefined {
    return WayLearning[value.toLowerCase() as keyof typeof WayLearning];
  }
  syllabusArr: string[]

  addVideo() {
    const syllabusArr = this.addCourse.get('syllabusArr') as FormArray;
    syllabusArr.push(this.fb.control(''));
  }
  removeVideo(index: number) {
    const syllabusArr = this.addCourse.get('syllabusArr') as FormArray;
    syllabusArr.removeAt(index);
  }



}
