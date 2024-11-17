import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import { Todos} from "./active-link.service";


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor(private localStorageService: LocalStorageService) {
  }

  private favorites: Todos[] = []

  setFavorites(favorite: string): void {
      const data: Todos = {
        date: new Date(),
        value: favorite,
      }
      if (!this.favorites.find(i => i.value === favorite)) {
        this.favorites.unshift(data)
      }
      this.localStorageService.set('favorites', JSON.stringify(this.favorites));
  }
  getFavorites(): Todos[] {
    this.localStorageService.get('favorites');
    return this.favorites;
  }
  deleteFavorite(value: string): void {
    this.favorites = this.favorites.filter(favorite => favorite.value !== value)
    this.localStorageService.remove('favorites');
  }
}
