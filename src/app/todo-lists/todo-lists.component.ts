import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {
  todoLists?: string[] = [];
  private subscription: Subscription | undefined;

  constructor(private readonly todoService: TodoService) {
  }

  ngOnInit(): void {
    this.subscription = this.todoService.getObservableTodos().subscribe({
      next: (data: string[]) => this.todoLists = data,
      error: err => console.log(err)
    });
  }
}
