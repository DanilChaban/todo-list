import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActiveLinkService {

  private todos: string[] = []

  setTodos(todo: string): void {
      this.todos.unshift(todo)
  }
  getTodos(): string[] {
      return this.todos
  }
  deleteTodo(todo: string): void {
      this.todos = this.todos.filter(today => today !== todo)
  }
}
