import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from "../../shared/todos.service";

@Component({
  selector: 'app-add-todo',
  templateUrl:'./add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo : EventEmitter<any> = new EventEmitter();

  constructor(private _todosService:TodosService) { }

  ngOnInit(): void {
  }

  addTodoHandler(todoInput:HTMLInputElement){
    // this._TodosService.addTodo(todoInput.value)
    // we don't maintain the todos in this component, only the todo-list does
    // that's why we emit the event to todo-list:
    this.addTodo.emit(todoInput.value);

    todoInput.value = ""
    todoInput.focus()
  }

  

}
