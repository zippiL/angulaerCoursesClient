import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HttpClientModule } from '@angular/common/http';
import { userService } from 'src/app/services/user.service';
import { lectureService } from 'src/app/services/lecture.service';
import { courseService } from 'src/app/services/course.service';
import { categoryService } from 'src/app/services/category.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { SyllabusDialogComponent } from './syllabus-dialog/syllabus-dialog.component';
import { LearningModeIconPipe } from './learning-mode-icon.pipe';

@NgModule({
  declarations: [
    AllCoursesComponent,
    CourseDetailsComponent,
    AddcourseComponent,
    EditCourseComponent,
    SyllabusDialogComponent,
    LearningModeIconPipe,
    // WayLearningIconPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,



  ],
  providers:[
userService,
lectureService,
courseService,
categoryService
  ],
  exports:[
    AddcourseComponent,AllCoursesComponent,CourseDetailsComponent,EditCourseComponent
  ]
})
export class CourseModule { }
