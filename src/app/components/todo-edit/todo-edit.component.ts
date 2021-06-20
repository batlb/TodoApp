import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId!:number

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    // this.todoId = Number(this.route.snapshot.paramMap.get("id"));
    this.todoId = Number(this.route.snapshot.params.id);
  }

  clickHndler(){
    this.location.back();
  }

}
