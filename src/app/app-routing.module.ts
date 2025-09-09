import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PublicBaseComponent } from './components/public-base/public-base.component';
import { PrivateBaseComponent } from './components/private-base/private-base.component';
import { NewRegistrationsComponent } from './components/new-registrations/new-registrations.component';
import { AvailableCoursesComponent } from './components/available-courses/available-courses.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: PublicBaseComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'new-registrations', component: NewRegistrationsComponent },
      { path: 'available-courses', component: AvailableCoursesComponent },
    ],
  },

  {
    path: '',
    component: PrivateBaseComponent,
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./modules/student/student.module').then(m => m.StudentModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./modules/courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'my-testing',
        loadChildren: () =>
          import('./modules/my-testing/my-testing.module').then(m => m.MyTestingModule),
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
