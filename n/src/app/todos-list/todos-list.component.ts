import { Component } from '@angular/core';
import {ActiveLinkService} from "../active-link.service";
import {FavoriteService} from "../favorite.service";




@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  isChecked: boolean[] = []
  isClicked: boolean[] = []




  constructor(public readonly activeLinkService: ActiveLinkService,
              public readonly favoriteService: FavoriteService) {
  }

  addToFavorite(todo: string, index: any) {
     this.favoriteService.setFavorites(todo);
     this.isClicked[index] = true;
 }

  toggleHighlight(index: number ) {
    this.isChecked[index] = !this.isChecked[index];
  }

  deleteTodos(value: string) {
    this.activeLinkService.deleteTodo(value);
    this.favoriteService.deleteFavorite(value);
}
}
