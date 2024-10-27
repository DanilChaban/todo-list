import { Component } from '@angular/core';
import {ActiveLinkService} from "../active-link.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  isChecked: boolean[] = [];
  getTodos = []
  today = new Date();
  isClicked: boolean[] = []

  constructor(public readonly activeLinkService: ActiveLinkService) {

  }


  toggleIcon(index: number) {
    if (this.isClicked.length <= index) {
      this.isClicked.length = index + 1;
    }
    this.isClicked[index] = !this.isClicked[index];
 }

}
