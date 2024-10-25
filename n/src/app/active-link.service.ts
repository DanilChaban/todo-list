import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActiveLinkService {

  private todos: string[] = []


  setTodos(todo: string) {
   this.todos.unshift(todo)
  }
  getTodos() {
  return this.todos
  }
  deleteTodo(todo: string) {
    this.todos = this.todos.filter(today => today !== todo)
  }
}
