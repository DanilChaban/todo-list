import { Injectable } from '@angular/core';


interface Fav {
  date: Date;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: Fav[] = []

  setFavorites(favorite: string): void {
      const data: Fav = {
        date: new Date(),
        value: favorite,
      }
      if (!this.favorites.find(i => i.value === favorite)) {
        this.favorites.unshift(data)
      }
  }
  getFavorites() {
    return this.favorites
  }
  deleteFavorites(value: string): void {
    this.favorites = this.favorites.filter(favorite => favorite.value !== value)
  }
}
