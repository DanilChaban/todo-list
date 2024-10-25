import { Component } from '@angular/core';
import {ActiveLinkService} from "../active-link.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  isChecked = false;
  getTodos = []
  today = new Date();
  isClicked = false

  constructor(public readonly activeLinkService: ActiveLinkService) {
  }


  toggleIcon() {
    this.isClicked = !this.isClicked
  }

}
