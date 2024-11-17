import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  isNightTheme: boolean = false;

  toggleTheme(): void {
    this.isNightTheme = !this.isNightTheme;
    localStorage.setItem('isNightTheme', this.isNightTheme.toString());
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('isNightTheme');
    this.isNightTheme = savedTheme === 'true';
  }
}


