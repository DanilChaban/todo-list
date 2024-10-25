import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import {TodosListModule} from "./todos-list/todos-list.module";
import {ActiveLinkService} from "./active-link.service";

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ActiveLinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
