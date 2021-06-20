import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ITodo } from "../../shared/todo";
import { TodosService } from "../../shared/todos.service";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:ITodo
  @Output() setDone:EventEmitter<any> = new EventEmitter();


  constructor( private _TodosService:TodosService) { }

  ngOnInit(): void { }

  removeHandler(id:number){
    this._TodosService.removeTodo(id)
  }

  completeHandler(todo:ITodo){
    this.setDone.emit(todo);
  }

}



