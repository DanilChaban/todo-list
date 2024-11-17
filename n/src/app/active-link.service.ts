import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import { Router } from "@angular/router";



export interface Todos {
  date: Date;
  value: string
}

@Injectable({
  providedIn: 'root'
})

export class ActiveLinkService  {

  constructor(private localStorageService: LocalStorageService, private router: Router ) {

}
  public todos: Todos[] = [];
  public isDuplicate: boolean = false;

  setTodos(todo: string): void{
      const data: Todos = {
        date: new Date(),
        value: todo
      };
      const repeat = this.todos.find(i => i.value === todo);
      if (!repeat) {
      this.todos.unshift(data);
      this.isDuplicate = false;
      void this.router.navigate([""]);
      } else {
        this.isDuplicate = true;
      }
      this.localStorageService.set('todos', JSON.stringify(this.todos));
  }

  getTodos(): Todos[] {
      this.localStorageService.get('todos');
      return this.todos;
  }

  deleteTodo(value: string): void {
      this.todos = this.todos.filter(todo => todo.value !== value);
      this.localStorageService.remove('todos');
  }
}
