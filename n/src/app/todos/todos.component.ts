import { Component } from '@angular/core';
import {ActiveLinkService} from "../active-link.service";
import {trigger} from "@angular/animations";



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent {
  inputValue = ''

  constructor(public readonly activeLinkService: ActiveLinkService) {

  }
  addTodo() {
    this.activeLinkService.setTodos(this.inputValue)
    return this.inputValue = ''
  }



  isButtonDisabled() {
   return  this.inputValue.trim() === ''
  }
}

