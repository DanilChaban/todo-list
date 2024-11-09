import { Injectable } from '@angular/core';


interface Todos {
  date: Date;
  value: string
}
@Injectable({
  providedIn: 'root'
})

export class ActiveLinkService {

  public todos: Todos[] = []

  setTodos(todo: string){
      const data: Todos = {
        date: new Date(),
        value: todo
      };
      if (!this.todos.find(i => i.value === todo)) {
      this.todos.unshift(data);
      }
     else {
      alert('Такая задача уже существует');
      }
  }
  getTodos(): Todos[] {
      return this.todos
  }
  deleteTodo(value: string): void {
      this.todos = this.todos.filter(todo => todo.value !== value)
  }

}
