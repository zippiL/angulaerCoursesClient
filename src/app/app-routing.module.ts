import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './moudels/login/login/login.component';
import { RegisterComponent } from './moudels/login/register/register.component';
import { AllCoursesComponent } from './moudels/course/all-courses/all-courses.component';
import { AddcourseComponent } from './moudels/course/addcourse/addcourse.component';
import { CourseDetailsComponent } from './moudels/course/course-details/course-details.component';
import { EditCourseComponent } from './moudels/course/edit-course/edit-course.component';
import { HomePageComponent } from './moudels/home-page/home-page.component';
import { AuthGuardService } from './services/auth-guard-service.service';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch:  "full"},
  { path: "home",component:HomePageComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "allCourses", component: AllCoursesComponent,canActivate:[AuthGuardService]},
  { path: "addCourses", component: AddcourseComponent,canActivate:[AuthGuardService]},
  { path: "courseDetails", component: CourseDetailsComponent,canActivate:[AuthGuardService]},
  { path: "editCourse/:id", component: EditCourseComponent,canActivate:[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
