import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ITodo } from '../../shared/todo';
import { TodosService } from "../../shared/todos.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewChecked {
  todos:ITodo[]=[]

  constructor( private _todosService:TodosService) { }

  // DONE: sort by 2 criterion (descending):
  // 1. By title
  // 2. By ID
  compareByTitle(a:ITodo,b:ITodo) {
    if (a.title > b.title || a.id > b.id)
      return 1;
    if (a.title < b.title || a.id < b.id)
      return -1;
    return 0;
  }

  ngOnInit() {
    this._todosService
      .fetchTodos()
      // .pipe( map(todos => todos.sort(this.compareByTitle)) )
      .subscribe( data => this.todos = data)
  }

  findCtodo(ftodo:ITodo){
    let koePodred:number
    const idx = this.todos.findIndex(todo=>todo==ftodo);
    return koePodred=idx
  }

  ngAfterViewChecked(){
    console.log('Current todos:');
    console.dir(this.todos)
  }

  addTodo(todoTitle:string){
    //
    
    console.log(`addTodo emited: ${todoTitle}`);

    // reffer: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
    const newTodo = <ITodo>{
      'title':todoTitle,
      'completed': false
    }
    this._todosService.addTodoМ(newTodo).subscribe(todo => (this.todos.push(todo)));
  }

  setDone(todo:ITodo){
    let nn:number
    nn=this.findCtodo(todo)+1;
    todo.completed=true;
    this._todosService.completeTodo(todo, nn).subscribe(data => todo.completed===data.completed);
  }

}
