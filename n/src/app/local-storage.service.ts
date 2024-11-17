import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

   set(key: string, value: any): void {
   localStorage.setItem(key, JSON.stringify(value));
   }

   get(key: string): any {
     const value = localStorage.getItem(key);
     return value ? JSON.parse(value): null;
   }

   remove(key: string): void {
     localStorage.removeItem(key);
   }

   has(key: string) {
    return  localStorage.getItem(key) !== null;
   }

   clear() {
     localStorage.clear();
   }
}