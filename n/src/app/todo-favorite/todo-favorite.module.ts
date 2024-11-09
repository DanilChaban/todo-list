import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFavoriteComponent} from "./todo-favorite.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";



const routes: Routes = [
  {
    path: "",
    component: TodoFavoriteComponent
  }
]
@NgModule({
  declarations: [
    TodoFavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    TodoFavoriteComponent
  ]
})
export class TodoFavoriteModule { }
