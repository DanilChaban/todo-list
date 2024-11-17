import { Component } from '@angular/core';
import {FavoriteService} from "../favorite.service";



@Component({
  selector: 'app-todo-favorite',
  templateUrl: './todo-favorite.component.html',
  styleUrls: ['./todo-favorite.component.scss']
})
export class TodoFavoriteComponent {
  isChecked: boolean[] = [];


  constructor(public readonly favoriteService: FavoriteService) {

  }

  toggleHighlight(index: number): void {
    this.isChecked[index] = !this.isChecked[index];
  }

  deleteFavorites(value: string): void {
    this.favoriteService.deleteFavorite(value);
  }
}
