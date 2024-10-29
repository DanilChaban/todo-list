import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./todos-list/todos-list.module").then((m) => m.TodosListModule)
  },
  {
    path: "todos-list",
    loadChildren: () => import("./todos/todos.module").then((m) => m.TodosModule)
  },
  {
    path: "todo-favorite",
    loadChildren: () => import("./todo-favorite/todo-favorite.module").then((m) => m.TodoFavoriteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
