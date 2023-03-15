import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = ["Kochen","Einkaufen","Wohnung reinigen"];
  constructor() {}
  getTodos(): string[] {
    return this.todos;
  }
  getObservableTodos():Observable<string[]> {
    return of(this.todos);
  }
}
