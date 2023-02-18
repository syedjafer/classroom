import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesPageComponent } from './classes-page/classes-page.component';

const routes: Routes = [
  { path: '', component: ClassesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
