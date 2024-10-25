import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosListComponent} from "./todos-list.component";
import {RouterModule, Routes} from "@angular/router";
import {TodosComponent} from "../todos/todos.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: "",
    component: TodosListComponent
  }
]

@NgModule({
  declarations: [
    TodosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    TodosListComponent
  ]
})
export class TodosListModule { }
