import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from "./components/header/header.component";
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { AutofocusDirective } from './shared/autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
