import { Component } from '@angular/core';
import {ActiveLinkService} from "../active-link.service";




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent {
  inputValue: string = '';


  constructor(public readonly activeLinkService: ActiveLinkService) {

  }
  addTodo() {
    this.activeLinkService.setTodos(this.inputValue);
}

  isButtonDisabled() {
    return this.inputValue.trim() === ''
  }

}


