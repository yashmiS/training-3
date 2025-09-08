import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseNewComponent } from './add-course-new/add-course-new.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [
    AddCourseNewComponent,
    ShowCoursesComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
