import { ErrorHandler, Injectable } from '@angular/core';
import { ITodo } from "./todo";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable,throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos!:ITodo[]
  todosURL = 'http://localhost:3000/todos';

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(`errorMessage: ${errorMessage}`);

    return throwError(errorMessage);
  }

  fetchTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosURL)
      .pipe(
        catchError(this.handleError)
      )
  }

  // add new todo object at the end of todos
  addTodoМ(todo:ITodo):Observable<ITodo>{
    return this.http.post<ITodo>(this.todosURL, todo, { headers: {
      "content-type": "application/json" }
    });
  }

  removeTodo(id:number){
    const idx = this.todos.findIndex(todo => id===todo.id);
    idx>=0 && this.todos.splice(idx,1);

    // note, this won't work
    // this.todos = this.todos.filter(todo=>todo.id===id)
  }

  completeTodo(todo:ITodo, pored:number){
    let newURL:string
    newURL=this.todosURL+'/'+pored;
    console.log(newURL);
    return this.http.put<ITodo>(newURL, todo, {headers: {
      "content-type": "application/json" }});
  }

}



