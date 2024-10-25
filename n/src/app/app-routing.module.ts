import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos/todos.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./todos/todos.module").then((m) => m.TodosModule)
  },
  {
    path: "todos-list",
    loadChildren: () => import("./todos-list/todos-list.module").then((m) => m.TodosListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
